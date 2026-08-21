import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanityDataset, sanityProjectId } from "./client";

export function getSanityImageUrl(
  source: SanityImageSource | undefined,
  width: number,
  height: number,
) {
  if (!source || !sanityProjectId) return null;

  return createImageUrlBuilder({
    projectId: sanityProjectId,
    dataset: sanityDataset,
  })
    .image(source)
    .width(width)
    .height(height)
    .fit("crop")
    .auto("format")
    .url();
}
