import "server-only";
import { createClient } from "@sanity/client";

export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const sanityApiVersion = "2026-08-21";
const sanityReadToken = process.env.SANITY_READ_TOKEN;

export const sanityClient = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      apiVersion: sanityApiVersion,
      perspective: "published",
      token: sanityReadToken,
      useCdn: !sanityReadToken,
    })
  : null;
