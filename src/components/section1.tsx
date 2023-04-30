import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import type { PostMeta } from "@/src/lib/api";
import styles from "@/styles/Articles.module.css";

const author = {
  name: "neodain",
  img: "/images/author12.png",
  designation: "Data Analyst, CEO and Publisher",
};

export default function section1({ posts }: { posts: PostMeta[] }) {
  SwiperCore.use([Autoplay]);

  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>

        <Swiper
          slidesPerView={1}
          loop={true}
          // autoplay={{
          //   delay: 2000,
          // }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.slug}>
              <Slide post={post}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function Slide({ post }: { post: PostMeta }) {
  return (
    <div className="grid md:grid-cols-2">
      <div className="images">
        <Link href={`/posts/${post.slug}`}>
          <Image
            className="sm:h-96"
            src={post.cover_image || "/"}
            width={600}
            height={600}
            alt=""
          />
        </Link>
      </div>
      <div className="info sm:pl-10 flex justify-center flex-col">
        <div className="cat">
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link
                className="text-orange-300 hover:text-orange-500"
                key={tag}
                href={`/tags/${tag}`}
              >
                {tag || "Unknown"}
              </Link>
            ))}
          </p>
          <Link
            className="text-gray-800 hover:text-gray-600"
            href={`/posts/${post.slug}`}
          >
            - {post.date || "Unknown"}
          </Link>
        </div>
        <div className="title">
          <Link
            className="text-2xl md:text-2xl font-bold text-gray-800 hover:text-gray-600"
            href={`/posts/${post.slug}`}
          >
            {post.title || "Unknown"}
          </Link>
        </div>
        <p className="text-gray-500 py-3">{post.excerpt || "description"}</p>
        <Author {...author}></Author>
      </div>
    </div>
  );
}
