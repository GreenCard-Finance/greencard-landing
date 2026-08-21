import Image, { type StaticImageData } from "next/image";
import type { SanityImageSource } from "@sanity/image-url";
import { getSanityImageUrl } from "@/sanity/image";

type BlogPostImageProps = {
  coverImage?: SanityImageSource;
  fallback: StaticImageData;
  alt: string;
  sizes?: string;
  priority?: boolean;
};

export function BlogPostImage({
  coverImage,
  fallback,
  alt,
  sizes,
  priority,
}: BlogPostImageProps) {
  const imageUrl = getSanityImageUrl(coverImage, 1200, 750);

  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <Image
      src={fallback}
      alt=""
      fill
      priority={priority}
      sizes={sizes}
      className="object-contain p-7 transition duration-500 group-hover:scale-105"
    />
  );
}
