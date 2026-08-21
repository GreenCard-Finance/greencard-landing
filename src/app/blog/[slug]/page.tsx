import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PortableText } from "@portabletext/react";
import {
  hero_hands,
  heropay_mobile,
  s1_mobile,
  s1_phone_img,
  s2__img_mobile,
  s4_img,
} from "@/assets/images";
import { BlogPostImage } from "@/components/blog/post-image";
import { blogPosts, getBlogPost, getBlogPosts } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const blogImages = [
  heropay_mobile,
  s1_phone_img,
  s2__img_mobile,
  hero_hands,
  s4_img,
  s1_mobile,
];

function getPostImage(slug: string) {
  const postIndex = blogPosts.findIndex((post) => post.slug === slug);

  return blogImages[Math.max(postIndex, 0) % blogImages.length];
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: ReactNode }) => (
      <h2 className="mt-11 font-source text-3xl font-black leading-tight text-black first:mt-0 sm:text-4xl">
        {children}
      </h2>
    ),
    h3: ({ children }: { children?: ReactNode }) => (
      <h3 className="mt-8 font-source text-2xl font-black leading-tight text-black">
        {children}
      </h3>
    ),
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mt-4 font-source text-lg font-medium leading-8 text-[#424A52]">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: ReactNode }) => (
      <ul className="mt-4 list-disc space-y-2 pl-6 font-source text-lg font-medium leading-8 text-[#424A52]">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: ReactNode }) => (
      <ol className="mt-4 list-decimal space-y-2 pl-6 font-source text-lg font-medium leading-8 text-[#424A52]">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: { children?: ReactNode; value?: { href?: string } }) => {
      if (!value?.href) return <>{children}</>;

      return (
        <a
          className="font-bold text-[#286744] underline underline-offset-4"
          href={value.href}
          rel="noreferrer"
          target={value.href.startsWith("http") ? "_blank" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

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
  const post = await getBlogPost(slug);

  if (!post) notFound();

  return (
    <main className="bg-white text-black">
      <article>
        <section className="px-6 pb-10 pt-16 sm:px-10 xl:pt-24">
          <div className="mx-auto max-w-[900px]">
            <Link
              href="/blog"
              className="font-source text-sm font-black uppercase tracking-widest text-[#286744]"
            >
              Back to blog
            </Link>
            <p className="mt-8 font-source text-base font-medium text-[#7A8288]">
              {post.publishedAt} - {post.category} - {post.readTime}
            </p>
            <h1 className="mt-5 font-heading text-[54px] leading-[0.9] tracking-wide text-black sm:text-[76px] xl:text-[88px]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-3xl font-source text-lg font-black leading-8 text-black sm:text-xl">
              {post.summary}
            </p>
          </div>
        </section>

        <section className="px-6 pb-16 sm:px-10 xl:pb-24">
          <div className="mx-auto max-w-[900px]">
            <div className="rounded-lg bg-[#F5F5F6] p-6">
              <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-[#DFF7C8]">
                <BlogPostImage
                  coverImage={post.coverImage}
                  fallback={getPostImage(post.slug)}
                  alt={post.title}
                  priority
                />
              </div>
            </div>

            <div className="mx-auto max-w-[760px] py-12">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />

              <div className="mt-14 rounded-lg bg-[#F5F5F6] p-7 sm:p-9">
                <p className="font-source text-sm font-black uppercase tracking-widest text-[#286744]">
                  GreenCard Finance
                </p>
                <p className="mt-4 max-w-2xl font-source text-lg font-medium leading-8 text-black">
                  We are launching Send Money Home for GBP-funded transfers to
                  recipients in Nigeria receiving NGN. Join the waitlist to hear
                  when early access opens.
                </p>
                <Link
                  href="/#waitlist"
                  className="mt-7 inline-flex rounded-lg bg-black px-6 py-3 font-source text-sm font-black text-white transition hover:bg-[#286744]"
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
