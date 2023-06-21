import { useRouter } from "next/router";
// import ReactPlayer from "react-player";

export default function LandingPage() {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <div className="landingpage">
      {/* <ReactPlayer
        url="/assets/bg.mp4"
        autoPlay
        controls
        muted
        loop
        width={"100%"}
        height={"100"}
        className="video-bg"
      /> */}
      <div className="overlay" />
      <video autoPlay loop muted playsInline width="100%" height="100vh">
        <source src="/assets/bg.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1>Welcome</h1>
        <p>To My Island</p>
        <div className="home-btn" onClick={handleClick}>
          Explore
        </div>
      </div>
    </div>
  );
}
// import Articles from "@/src/components/articles";
// import Layout from "../layout/format";

// // compoenents
// import Section1 from "../src/components/section1";
// import Section2 from "../src/components/section2";
// import Section3 from "../src/components/section3";
// import Section4 from "../src/components/section4";
// import Section5 from "../src/components/section5";

// import { getAllPosts, PostMeta } from "@/src/lib/api";
// import { BPost, getLifes, getPosts, LPost } from "../sanity/types";

// export default function Home({
//   posts,
//   lifes,
//   langs,
// }: {
//   posts: BPost[];
//   lifes: LPost[];
//   langs: PostMeta[];
// }) {
//   return (
//     <Layout>
//       <Section5 posts={posts} lifes={lifes} />
//       <Section1 posts={langs} />
//       <Section2 posts={langs} />
//       <Section3 posts={langs} />
//       {/* <Section4 posts={langs} /> */}
//       <Articles posts={langs} />
//     </Layout>
//   );
// }

// export async function getServerSideProps() {
//   const posts = await getPosts();
//   const lifes = await getLifes();

//   const langs = getAllPosts()
//     .slice(0)
//     .map((lang) => lang.meta);

//   return { props: { posts, lifes, langs } };
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const posts = await getPosts();
//   const lifes = await getLifes();

//   const langs = getAllPosts()
//     .slice(0)
//     .map((lang) => lang.meta);

//   return { props: { posts, lifes, langs } };
// }
