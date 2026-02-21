import type { GalleryImage } from '~/types/gallery'

export function useGallery() {
  const images = useState<GalleryImage[]>('gallery-images', () => [])
  const lightboxOpen = useState('lightbox-open', () => false)
  const lightboxIndex = useState('lightbox-index', () => 0)

  const openLightbox = (index: number) => {
    lightboxIndex.value = index
    lightboxOpen.value = true
  }

  const closeLightbox = () => {
    lightboxOpen.value = false
  }

  const nextImage = () => {
    if (images.value.length === 0) return
    lightboxIndex.value = (lightboxIndex.value + 1) % images.value.length
  }

  const prevImage = () => {
    if (images.value.length === 0) return
    lightboxIndex.value =
      (lightboxIndex.value - 1 + images.value.length) % images.value.length
  }

  return {
    images,
    lightboxOpen: readonly(lightboxOpen),
    lightboxIndex: readonly(lightboxIndex),
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  }
}
