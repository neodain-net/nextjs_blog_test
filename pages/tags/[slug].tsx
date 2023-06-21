import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { getAllPosts, PostMeta } from "@/src/lib/api";
import Articles from "@/src/components/articles";
import Nav from "@/src/components/Nav";

export default function TagPage({
  slug,
  posts,
}: {
  slug: string;
  posts: PostMeta[];
}) {
  return (
    <>
      <Head>
        <title>{slug}</title>
      </Head>
      <Nav />
      <div className="container pt-20">
        <h1>Tag: {slug}</h1>
        <Articles posts={posts} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const posts = getAllPosts().filter((post) => post.meta.tags.includes(slug));

  return {
    props: {
      slug,
      posts: posts.map((post) => post.meta),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const tags = new Set(posts.map((post) => post.meta.tags).flat());
  const paths = Array.from(tags).map((tag) => ({ params: { slug: tag } }));

  return {
    paths,
    fallback: false,
  };
};
