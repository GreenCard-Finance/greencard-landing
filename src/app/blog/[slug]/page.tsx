import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  heropay_mobile,
  s1_mobile,
  s2__img_mobile,
  s4_img,
} from "@/assets/images";
import { blogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const blogImages = [heropay_mobile, s1_mobile, s2__img_mobile, s4_img];

function getPostImage(slug: string) {
  const postIndex = blogPosts.findIndex((post) => post.slug === slug);

  return blogImages[Math.max(postIndex, 0) % blogImages.length];
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog",
    };
  }

  return {
    title: post.title,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="bg-[#F7F9F8] text-[#1F2933]">
      <article>
        <section className="bg-[#1F2933] px-6 pb-12 pt-20 text-white sm:px-10 xl:pt-28">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/blog"
              className="font-source text-sm font-black uppercase tracking-widest text-[#9FE870]"
            >
              Back to blog
            </Link>
            <p className="mt-8 font-source text-sm font-bold text-white/70">
              {post.category} - {post.readTime}
            </p>
            <h1 className="mt-4 font-heading text-[52px] leading-[0.95] tracking-wide sm:text-[72px] xl:text-[92px]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl font-source text-lg font-medium leading-8 text-white/80">
              {post.summary}
            </p>
          </div>
        </section>

        <section className="px-6 py-10 sm:px-10">
          <div className="mx-auto max-w-5xl overflow-hidden bg-white shadow-[0_18px_55px_rgba(31,41,51,0.12)]">
            <div className="relative aspect-[16/8] min-h-72 bg-[#DFF3E5]">
              <Image
                src={getPostImage(post.slug)}
                alt=""
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="px-6 py-10 sm:px-10 xl:px-16 xl:py-14">
              <div className="space-y-10">
                {post.body.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-source text-2xl font-black text-[#1F2933] sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="font-source text-base font-medium leading-8 text-[#425466] sm:text-lg"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-12 bg-[#EAF6EF] p-6 sm:p-8">
                <p className="font-source text-sm font-black uppercase tracking-widest text-[#2E8B57]">
                  GreenCard Finance
                </p>
                <p className="mt-3 max-w-2xl font-source text-base font-medium leading-7 text-[#1F2933]">
                  We are launching Send Money Home for UK-to-Nigeria transfers.
                  Join the waitlist to hear when early access opens.
                </p>
                <Link
                  href="/#waitlist"
                  className="mt-6 inline-flex rounded-full bg-[#1F2933] px-6 py-3 font-source text-sm font-black text-white transition hover:bg-[#286744]"
                >
                  Join Waitlist
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
