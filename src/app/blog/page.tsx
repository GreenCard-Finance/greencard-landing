import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  hero_hands,
  heropay_mobile,
  s1_mobile,
  s1_phone_img,
  s2__img_mobile,
  s4_img,
} from "@/assets/images";
import { blogCategories, blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from GreenCard Finance on sending money from the UK to Nigeria.",
};

type BlogPageProps = {
  searchParams?: Promise<{
    category?: string;
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

const imageBackgrounds = [
  "bg-[#FFE8BF]",
  "bg-[#DFF7C8]",
  "bg-[#A9EAF3]",
  "bg-[#EDE7FF]",
  "bg-[#DDEFE4]",
  "bg-[#F6D9D9]",
];

function getPostImage(index: number) {
  return blogImages[index % blogImages.length];
}

function getImageBackground(index: number) {
  return imageBackgrounds[index % imageBackgrounds.length];
}

function getCategoryHref(category: string) {
  return category === "All"
    ? "/blog"
    : `/blog?category=${encodeURIComponent(category)}`;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = searchParams ? await searchParams : {};
  const requestedCategory = params.category;
  const activeCategory =
    requestedCategory && blogCategories.includes(requestedCategory)
      ? requestedCategory
      : "All";
  const posts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <main className="bg-white text-black">
      <section className="px-6 pb-16 pt-16 sm:px-10 xl:pt-24">
        <div className="mx-auto max-w-[1070px]">
          <div className="max-w-[620px]">
            <h1 className="font-heading text-[58px] leading-[0.88] tracking-wide text-black sm:text-[84px] xl:text-[92px]">
              The GreenCard BLOG
            </h1>
            <p className="mt-7 font-source text-lg font-black leading-8 text-black sm:text-xl">
              Notes from the team building a clearer UK-to-Nigeria money
              transfer experience.
            </p>
            <p className="mt-7 max-w-md font-source text-base font-medium leading-7 text-[#5B5F66]">
              Never miss a post. Get product updates, corridor notes, and
              launch news straight to your inbox.
            </p>

            <form
              action="/#waitlist"
              className="mt-6 flex max-w-[500px] flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Subscribe for Updates"
                className="h-14 min-w-0 flex-1 rounded-lg border border-[#B8C0BB] px-4 font-source text-base font-medium text-black outline-none transition placeholder:text-[#8E9692] focus:border-black"
              />
              <button
                type="submit"
                className="h-14 rounded-lg bg-black px-7 font-source text-base font-black text-white transition hover:bg-[#286744]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="mt-24">
            <h2 className="font-source text-2xl font-black text-[#4A5560]">
              News by topic
            </h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {blogCategories.map((category) => (
                <Link
                  key={category}
                  href={getCategoryHref(category)}
                  className={`shrink-0 rounded-full px-6 py-3 font-source text-base font-black ${
                    category === activeCategory
                      ? "bg-black text-white"
                      : "bg-[#E5E5E5] text-black"
                  }`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-lg bg-[#F5F5F6] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
              >
                <div
                  className={`relative aspect-[1.2] overflow-hidden rounded-lg ${getImageBackground(index)}`}
                >
                  <Image
                    src={getPostImage(index)}
                    alt=""
                    fill
                    className="object-contain p-7 transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 310px, (min-width: 768px) 45vw, 90vw"
                  />
                </div>
                <div className="pt-6">
                  <p className="font-source text-base font-medium text-[#7A8288]">
                    {post.publishedAt}
                  </p>
                  <h3 className="mt-5 font-source text-[28px] font-black leading-[0.98] text-black sm:text-[30px]">
                    {post.title}
                  </h3>
                  <p className="mt-4 font-source text-base font-medium leading-7 text-[#5B5F66]">
                    {post.summary}
                  </p>
                  <p className="mt-5 font-source text-sm font-black text-[#286744]">
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
