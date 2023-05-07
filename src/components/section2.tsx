import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import Fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

import type { PostMeta } from "@/src/lib/api";
import styles from "@/styles/Articles.module.css";

const author = {
  name: "Erica",
  img: "/images/author7.png",
  designation: "Data Analyst",
};

export default function section2({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

      {/* grid columns */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {posts.map((post) => (
          <Post post={post} key={post.slug}></Post>
        ))}
      </div>
    </section>
  );
}

function Post({ post }: { post: PostMeta }) {
  return (
    <div className="item">
      <div className="images">
        <Link href={`/langs/${post.slug}`}>
          <Image
            src={post.cover_image || "/"}
            className="rounded sm:h-44"
            width={600}
            height={400}
            alt=""
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-2">
        <div className="cat">
          <p className={styles.tags}>
            {post.tags.map((tag) => (
              <Link
                // className="text-xl font-bold text-gray-800 hover:text-gray-600"
                className="text-orange-600 hover:text-orange-800"
                key={tag}
                href={`/tags/${tag}`}
              >
                {tag || "Unknown"}
              </Link>
            ))}
          </p>
          <Link
            // className="text-xl font-bold text-gray-800 hover:text-gray-600"
            className="text-gray-800 hover:text-gray-600"
            href={`/langs/${post.slug}`}
          >
            - {post.date || "Unknown"}
          </Link>
        </div>
        <div className="title h-20 pt-2">
          <Link
            className="text-xl font-bold text-gray-800 hover:text-gray-600"
            href={`/langs/${post.slug}`}
          >
            {post.title || "Title"}
          </Link>
        </div>
        <p className="text-gray-500 py-3 h-24">{post.excerpt}</p>
        <Author {...author}></Author>
      </div>
    </div>
  );
}
