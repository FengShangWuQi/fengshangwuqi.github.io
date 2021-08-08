import path from "path";
import { outputFile } from "fs-extra";
import globby from "globby";
import { ImagePool } from "@squoosh/lib";
import { logger } from "@fengshangwuqi/logger";

import { prettySize } from "../../utils/prettySize";

enum Encoder {
  ".png" = "oxipng",
  ".jpg" = "mozjpeg",
  ".jpeg" = "mozjpeg",
  ".webp" = "webp",
}

const imagePool = new ImagePool();
const results = new Map();

const compressImage = async (imgPath: string) => {
  const image = imagePool.ingestImage(imgPath);
  const originalFile = image.file;
  const fileExt = path.extname(originalFile) as keyof typeof Encoder;
  const fileName = path.basename(originalFile, fileExt);

  const {
    bitmap: { width },
    size,
  } = await image.decoded; // Wait until the image is decoded before running preprocessors.

  const preprocessOptions = {
    // When either width or height is specified, the image resized to specified size keeping aspect ratio.
    resize: {
      enabled: true,
      width: Math.min(width, 1200),
    },
  };
  await image.preprocess(preprocessOptions);

  const encodeOptions = {
    oxipng: {
      level: 2,
    },
    mozjpeg: {
      quality: 75,
    },
    webp: {
      quality: 75,
    },
  };
  await image.encode(encodeOptions);

  const {
    size: outputSize,
    extension,
    binary: rawEncodedImage,
  } = await image.encodedWith[Encoder[fileExt]];

  const scale = outputSize / size;

  if (Math.abs(1 - scale) >= 0.05) {
    const percent = `${(scale * 100).toPrecision(3)}%`;

    results.set(image, {
      fileName,
      ext: extension,
      size: prettySize(size),
      outputSize: prettySize(outputSize),
      percent,
    });

    await outputFile(imgPath, rawEncodedImage);
  }
};

(async () => {
  const imagePath = await globby(process.cwd(), {
    expandDirectories: {
      extensions: ["png", "jpg", "jpeg", "webp"],
    },
    gitignore: true,
  });

  await Promise.all(imagePath.map(path => compressImage(path)));

  const resultArr = Array.from(results.values());

  if (resultArr.length > 0) {
    console.table(
      resultArr.sort((a, b) => {
        const nameA = a.fileName.toUpperCase();
        const nameB = b.fileName.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      }),
    );
  }

  await imagePool.close();

  logger("build assets").withLevel("SUCCESS");
})();
