import Articles from "@/src/components/articles";
import Format from "../../layout/format";

// compoenents
import Section1 from "../../src/components/section1";
import Section2 from "../../src/components/section2";
import Section3 from "../../src/components/section3";
import Section4 from "../../src/components/section4";
import Section5 from "../../src/components/section5";

import { getAllPosts, PostMeta } from "@/src/lib/api";
import { BPost, getLifes, getPosts, LPost } from "../../sanity/types";

export default function Home({
  posts,
  lifes,
  langs,
}: {
  posts: BPost[];
  lifes: LPost[];
  langs: PostMeta[];
}) {
  return (
    <Format>
      <Section5 posts={posts} lifes={lifes} />
      <Section1 posts={langs} />
      <Section2 posts={langs} />
      <Section3 posts={langs} />
      {/* <Section4 posts={langs} /> */}
      <Articles posts={langs} />
    </Format>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  const lifes = await getLifes();

  const langs = getAllPosts()
    .slice(0)
    .map((lang) => lang.meta);

  return { props: { posts, lifes, langs } };
}

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts();
//   const lifes = await getLifes();

//   const langs = getAllPosts()
//     .slice(0)
//     .map((lang) => lang.meta);

//   return { props: { posts, lifes, langs } };
// }
