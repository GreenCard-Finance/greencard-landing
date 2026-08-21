import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

type SanityWebhookPayload = {
  slug?: string;
};

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");

  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid revalidation secret" }, { status: 401 });
  }

  const payload = (await request.json().catch(() => ({}))) as SanityWebhookPayload;

  revalidatePath("/");
  revalidatePath("/blog");

  if (payload.slug) {
    revalidatePath(`/blog/${payload.slug}`);
  }

  return NextResponse.json({ revalidated: true });
}
