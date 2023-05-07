import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import type { PostMeta } from "@/src/lib/api";
import styles from "@/styles/Articles.module.css";

const author = {
  name: "Karen",
  img: "/images/author9.png",
  designation: "Data Analyst",
};

export default function section3({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {posts.map((post) => (
          <SwiperSlide key={post.slug}>
            <Post post={post}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ post }: { post: PostMeta }) {
  return (
    <div className="grid">
      <div className="images">
        <Link href={`/langs/${post.slug}`}>
          <Image
            className="rounded max-h-72 sm:h-44 md:h-60 lg:h-80"
            src={post.cover_image || ""}
            width={600}
            height={400}
            alt=""
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link
                className="text-orange-600 hover:text-orange-800"
                key={tag}
                href={`/tags/${tag}`}
              >
                {tag || "Unknown"}
              </Link>
            ))}
          </p>
          <Link
            className="text-gray-800 hover:text-gray-600"
            href={`/langs/${post.slug}`}
          >
            - {post.date || "Unknown"}
          </Link>
        </div>
        <div className="title pt-2 h-20">
          <Link
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
            href={`/langs/${post.slug}`}
          >
            {post.title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3 h-20">
          {post.excerpt || "description"}
        </p>
        <Author {...author}></Author>
      </div>
    </div>
  );
}
