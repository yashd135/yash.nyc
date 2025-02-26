/**
 * Image utilities for optimal loading and display
 */

// Default placeholder blur data URL
export const DEFAULT_BLUR_DATA_URL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QOQvhA==';

// Generate image size props based on aspect ratio
export function getImageSizeProps(aspectRatio: number = 1, baseWidth: number = 800) {
  const height = Math.round(baseWidth / aspectRatio);
  return {
    width: baseWidth,
    height,
  };
}

// Get optimized image props with placeholder
export function getOptimizedImageProps(
  src: string | StaticImageData, 
  alt: string, 
  priority = false, 
  aspectRatio = 1
): Pick<ImageProps, 'src' | 'alt' | 'width' | 'height' | 'priority' | 'placeholder' | 'blurDataURL'> {
  return {
    src,
    alt,
    ...getImageSizeProps(aspectRatio),
    priority,
    placeholder: 'blur' as PlaceholderValue,
    blurDataURL: DEFAULT_BLUR_DATA_URL,
  };
}