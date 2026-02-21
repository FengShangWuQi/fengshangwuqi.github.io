import { readdirSync, readFileSync } from 'node:fs'
import { join, extname, basename } from 'node:path'
import imageSize from 'image-size'
import type { GalleryImage } from '~/types/gallery'

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

function fileNameToTitle(filename: string): string {
  const name = basename(filename, extname(filename))
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default defineEventHandler((): GalleryImage[] => {
  const imagesDir = join(process.cwd(), 'public', 'images')

  let files: string[]
  try {
    files = readdirSync(imagesDir)
  } catch {
    return []
  }

  const images: GalleryImage[] = files
    .filter((file) => SUPPORTED_EXTS.has(extname(file).toLowerCase()))
    .sort()
    .reduce<GalleryImage[]>((acc, file) => {
      const filePath = join(imagesDir, file)
      try {
        const buffer = readFileSync(filePath)
        const dimensions = imageSize(buffer)
        acc.push({
          src: `/images/${file}`,
          title: fileNameToTitle(file),
          width: dimensions.width ?? 800,
          height: dimensions.height ?? 600,
        })
      } catch {
        // Skip unreadable or corrupt images
      }
      return acc
    }, [])

  return images
})
