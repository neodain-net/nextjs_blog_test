import Author from "./_child/author";
import Link from "next/link";
import Image from "next/image";

import Fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import type { PostMeta } from "@/src/lib/api";
import styles from "@/styles/Articles.module.css";

const author = {
  name: "Jane",
  img: "/images/author1.png",
  designation: "Data Analyst",
};

export default function section4({ posts }: { posts: PostMeta[] }) {
  // posts.map((post) => {
  //   post.category === "languages" ? (
  //     <Post post={post} key={post.slug}></Post>
  //   ) : (
  //     <></>
  //   );
  // });

  return (
    <section className="container mx-auto px-20 py-16">
      <div className="grid md:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Business</h1>
          <div className="flex flex-col gap-6">
            {posts.map((post) =>
              String(post.category) === "language" ? (
                <Post post={post} key={post.slug}></Post>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
        <div className="item">
          <h1 className="font-bold text-4xl py-12">Travel</h1>
          <div className="flex flex-col gap-6">
            {posts.map((post) =>
              String(post.category) === "it" ? (
                <Post post={post} key={post.slug}></Post>
              ) : (
                <></>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ post }: { post: PostMeta }) {
  return (
    <div className="flex gap-5">
      <div className="images flex flex-col justify-center item-centered">
        <Link href={`/langs/${post.slug}`}>
          <Image
            src={post.cover_image || "/"}
            className="rounded w-44 h-44 justify-center item-centered"
            width={250}
            height={250}
            alt=""
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
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
            className="text-gray-600 hover:text-orange-800"
            href={`/langs/${post.slug}`}
          >
            - {post.date || "Unknown"}
          </Link>
        </div>
        <div className="title w-80 h-16">
          <Link
            className="text-xl font-bold text-gray-800 hover:text-orange-600"
            href={`/langs/${post.slug}`}
          >
            {post.title || "Title"}
          </Link>
        </div>
        {/* <p className="text-gray-500 py-3">{post.excerpt}</p> */}
        <Author {...author}></Author>
      </div>
    </div>
  );
}
