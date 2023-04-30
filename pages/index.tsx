import Articles from "@/src/components/articles";
import Format from "../layout/format";

// compoenents
import Section1 from "../src/components/section1";
import Section2 from "../src/components/section2";
import Section3 from "../src/components/section3";
import Section4 from "../src/components/section4";
import Section5 from "../src/components/section5";

import { getAllPosts, PostMeta } from "@/src/lib/api";
import { BPost, client } from "../sanity/types";

export default function Home({
  blogs,
  posts,
}: {
  posts: PostMeta[];
  blogs: BPost[];
}) {
  return (
    <Format>
      <Section5 posts={blogs} />
      <Section1 posts={posts} />
      <Section3 posts={posts} />
      {/* <Section1 posts={posts} />
      <Section2 posts={posts} />
      <Section3 posts={posts} />
      <Section4 posts={posts} /> */}
      <Articles posts={posts} />
    </Format>
  );
}

export async function getStaticProps() {
  const blogs = await client.fetch(`*[_type == "post"]`);

  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { blogs, posts } };
}
