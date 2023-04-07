import Head from "next/head";
import { getAllPosts, PostMeta } from "@/src/api";
import Articles from "@/src/components/articles";

import Image from "next/image";
import Format from "../layout/format";

// compoenents
import Section1 from "../src/components/section1";
import Section2 from "../src/components/section2";
import Section3 from "../src/components/section3";
import Section4 from "../src/components/section4";

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <Format>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Articles posts={posts} />
    </Format>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { posts } };
}
