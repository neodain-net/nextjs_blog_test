import { BPost } from "../../sanity/types";

export default function section5({ posts }: { posts: BPost[] }) {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl pb-12 text-center">Sanity Post</h1>
      {posts && posts.map((post) => <div key={post._id}> {post.name}</div>)}
    </section>
  );
}

// const client = createClient({
//   projectId: "poxxqfti",
//   dataset: "production",
//   apiVersion: "2023-04-24",
//   token: process.env.NEXT_SANITY_TOKENS,
//   useCdn: true,
// });

// export async function getStaticProps() {
//   const posts = await client.fetch(`*[_type == "post"]`);

//   return {
//     props: {
//       posts,
//     },
//   };
// }
