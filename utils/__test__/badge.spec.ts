import { generateBadgeUrl } from "../badge";

describe("badge #utils #badge", () => {
  it("generateBadgeUrl(label, message) - without opts", () => {
    const badgeUrl = generateBadgeUrl({ label: "label", message: "message" });

    expect(badgeUrl).toBe(
      "https://img.shields.io/badge/label-message-brightgreen?style=flat",
    );
  });

  it("generateBadgeUrl(label, message, { logo }) - with logo opts", () => {
    const badgeUrl = generateBadgeUrl({
      label: "label",
      message: "message",
      options: { logo: "logo" },
    });

    expect(badgeUrl).toBe(
      "https://img.shields.io/badge/label-message-brightgreen?style=flat&logo=logo",
    );
  });

  it("generateBadgeUrl(label, message, { color, style, logo }) - with all opts", () => {
    const badgeUrl = generateBadgeUrl({
      label: "label",
      message: "message",
      options: {
        color: "yellow",
        style: "plastic",
        logo: "logo",
      },
    });

    expect(badgeUrl).toBe(
      "https://img.shields.io/badge/label-message-yellow?style=plastic&logo=logo",
    );
  });
});
