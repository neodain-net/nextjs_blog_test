import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/src/lib/api";
import styles from "@/styles/Articles.module.css";

export default function Articles({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="container">
      <ul className={styles.list}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <li key={post.slug}>
              <div className={styles.card}>
                <Image
                  className="sm:h-40 sm:max-h-52 md:h-44 w-full"
                  src={post.cover_image}
                  width={324}
                  height={208}
                  alt=""
                />
                {/* <img src={post.cover_image} alt="" /> */}
                <div className={styles.post_date}>Posted on {post.date}</div>
                <div className={styles.post_title}>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </div>
                <p>{post.excerpt}</p>
                <p className={styles.tags}>
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/tags/${tag}`}>
                      {tag}
                    </Link>
                  ))}
                </p>
                <button className={styles.btn}>
                  <Link href={`/posts/${post.slug}`}>Read More</Link>
                </button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}
