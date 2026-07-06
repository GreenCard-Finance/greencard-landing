import Image from "next/image";
import Link from "next/link";
import { heropay_mobile, s1_phone_img, s2__img_mobile } from "@/assets/images";
import { blogPosts } from "@/lib/blog";

const previewImages = [heropay_mobile, s1_phone_img, s2__img_mobile];
const previewBackgrounds = ["bg-[#FFE8BF]", "bg-[#DFF7C8]", "bg-[#A9EAF3]"];

function SectionBlog() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-white px-6 py-14 sm:px-10 xl:py-20">
      <div className="mx-auto max-w-[1070px]">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="font-source text-sm font-black uppercase tracking-widest text-[#2E8B57]">
              Blog
            </p>
            <h2 className="mt-3 font-heading text-[46px] leading-[0.9] text-black sm:text-[64px] xl:text-[74px]">
              From the GreenCard BLOG
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex w-fit rounded-lg bg-black px-6 py-3 font-source text-sm font-black text-white transition hover:bg-[#286744]"
          >
            Read the blog
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-lg bg-[#F5F5F6] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            >
              <div
                className={`relative aspect-[1.2] overflow-hidden rounded-lg ${previewBackgrounds[index]}`}
              >
                <Image
                  src={previewImages[index]}
                  alt=""
                  fill
                  className="object-contain p-7 transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="pt-6">
                <p className="font-source text-base font-medium text-[#7A8288]">
                  {post.publishedAt}
                </p>
                <h3 className="mt-5 font-source text-[28px] font-black leading-[0.98] text-black">
                  {post.title}
                </h3>
                <p className="mt-4 font-source text-base font-medium leading-7 text-[#5B5F66]">
                  {post.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionBlog;
