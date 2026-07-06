import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  heropay_mobile,
  s1_mobile,
  s2__img_mobile,
  s4_img,
} from "@/assets/images";
import { blogCategories, blogPosts, featuredBlogPost } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Simple guides from GreenCard Finance for sending money from the UK to Nigeria.",
};

const blogImages = [heropay_mobile, s1_mobile, s2__img_mobile, s4_img];

function getPostImage(index: number) {
  return blogImages[index % blogImages.length];
}

export default function BlogPage() {
  const posts = blogPosts.filter((post) => post.slug !== featuredBlogPost.slug);

  return (
    <main className="bg-[#F7F9F8] text-[#1F2933]">
      <section className="relative overflow-hidden bg-[#1F2933] px-6 pb-16 pt-20 text-white sm:px-10 xl:pt-28">
        <div className="mx-auto grid max-w-360 gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div>
            <p className="font-source text-sm font-black uppercase tracking-widest text-[#9FE870]">
              GreenCard Blog
            </p>
            <h1 className="mt-4 max-w-4xl font-heading text-[54px] leading-[0.92] tracking-wide text-white sm:text-[74px] xl:text-[96px]">
              Simple guides for sending money home
            </h1>
            <p className="mt-6 max-w-2xl font-source text-lg font-medium leading-8 text-white/80">
              Helpful notes on UK-to-Nigeria transfers, clear rates, safer
              payments, and supporting the people who matter.
            </p>
          </div>

          <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <p className="font-source text-xs font-black uppercase tracking-widest text-[#9FE870]">
              Never miss a launch note
            </p>
            <p className="mt-3 font-source text-base leading-7 text-white/85">
              Join the waitlist for product updates, practical transfer guides,
              and launch news.
            </p>
            <Link
              href="/#waitlist"
              className="mt-6 inline-flex rounded-full bg-[#9FE870] px-6 py-3 font-source text-sm font-black text-[#1F2933] transition hover:bg-white"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D8E0DC] bg-white px-6 py-6 sm:px-10">
        <div className="mx-auto flex max-w-360 gap-3 overflow-x-auto">
          {blogCategories.map((category) => (
            <span
              key={category}
              className="shrink-0 rounded-full border border-[#D8E0DC] bg-[#F7F9F8] px-4 py-2 font-source text-sm font-bold text-[#27563C]"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 xl:py-20">
        <div className="mx-auto max-w-360">
          <div className="grid gap-8 overflow-hidden bg-white shadow-[0_18px_55px_rgba(31,41,51,0.12)] xl:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-80 bg-[#286744]">
              <Image
                src={heropay_mobile}
                alt=""
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="p-7 sm:p-10 xl:p-12">
              <p className="font-source text-xs font-black uppercase tracking-widest text-[#2E8B57]">
                Featured blog
              </p>
              <p className="mt-5 font-source text-sm font-bold text-[#6B7280]">
                {featuredBlogPost.category} - {featuredBlogPost.readTime}
              </p>
              <h2 className="mt-3 max-w-3xl font-heading text-[42px] leading-[0.95] text-[#1F2933] sm:text-[58px] xl:text-[64px]">
                {featuredBlogPost.title}
              </h2>
              <p className="mt-5 max-w-2xl font-source text-base font-medium leading-8 text-[#425466]">
                {featuredBlogPost.summary}
              </p>
              <Link
                href={`/blog/${featuredBlogPost.slug}`}
                className="mt-8 inline-flex rounded-full bg-[#1F2933] px-6 py-3 font-source text-sm font-black text-white transition hover:bg-[#286744]"
              >
                Read guide
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden bg-white shadow-[0_12px_35px_rgba(31,41,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(31,41,51,0.14)]"
              >
                <div className="relative aspect-[4/3] bg-[#DFF3E5]">
                  <Image
                    src={getPostImage(index + 1)}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-source text-xs font-black uppercase tracking-widest text-[#2E8B57]">
                    {post.label}
                  </p>
                  <h3 className="mt-3 font-source text-xl font-black leading-tight text-[#1F2933]">
                    {post.title}
                  </h3>
                  <p className="mt-3 font-source text-sm font-medium leading-6 text-[#5F6C75]">
                    {post.summary}
                  </p>
                  <p className="mt-5 font-source text-xs font-bold uppercase tracking-widest text-[#8E8E93]">
                    {post.category} - {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
