import Image from "next/image";
import Link from "next/link";
import { heropay_mobile, s1_mobile, s2__img_mobile } from "@/assets/images";
import { blogPosts } from "@/lib/blog";

const previewImages = [heropay_mobile, s1_mobile, s2__img_mobile];

function SectionBlog() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="bg-[#F7F9F8] px-6 py-14 sm:px-10 xl:py-20">
      <div className="mx-auto max-w-360">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <p className="font-source text-sm font-black uppercase tracking-widest text-[#2E8B57]">
              Blog
            </p>
            <h2 className="mt-3 font-heading text-[42px] leading-[0.95] text-[#1F2933] sm:text-[58px] xl:text-[72px]">
              Notes before you send
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex w-fit rounded-full bg-[#1F2933] px-6 py-3 font-source text-sm font-black text-white transition hover:bg-[#286744]"
          >
            Read the blog
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white shadow-[0_12px_35px_rgba(31,41,51,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(31,41,51,0.14)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DFF3E5]">
                <Image
                  src={previewImages[index]}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="font-source text-xs font-black uppercase tracking-widest text-[#2E8B57]">
                  {post.category}
                </p>
                <h3 className="mt-3 font-source text-xl font-black leading-tight text-[#1F2933]">
                  {post.title}
                </h3>
                <p className="mt-3 font-source text-sm font-medium leading-6 text-[#5F6C75]">
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
