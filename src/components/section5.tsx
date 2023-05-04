import { BPost, LPost } from "../../sanity/types";
import Image from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "sanity";

// NEXT_SANITY_TOKENS=skRNeoOet8iIvOSTbnmIN2mhKM3CfBrkpwdJpVTDqx6NXvYLZjWmhNqDFOF4ZAzGgVIEt3YVuCkBOgjC58xjO7JmjOjoY0KNAYT47ljtMFhWbdcPsWwat9YV0J3aAamCYlGXbRmR05Ffek8K6G2tHry2yLa8aXiqL4rprVhwH748HGHXqozm

export default function section5({
  posts,
  lifes,
}: {
  posts: BPost[];
  lifes: LPost[];
}) {
  return (
    <section className="mx-auto px-4 sm:px-5 md:px-20 py-10">
      <div className="text-7xl text-center pb-12">
        <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Sanity Post
        </span>
      </div>
      <div className="mt-24 font-bold text-gray-700 text-3xl">My Interests</div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts &&
          posts.map((post) => (
            <Link
              href={"/posts/${post.slug}"}
              key={post._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:border-blue-500 sm:hover:scale-105 sm:transition"
            >
              {post.image && (
                <Image
                  className="object-cover rounded-lg border border-gray-500"
                  src={post.image}
                  width={750}
                  height={400}
                  alt=""
                />
              )}
              <div className="mt-2 text-sm bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {post.publishedAt.toString()}
              </div>
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {post.title}
              </div>
              {/* <div>{post.description}</div> */}
              {/* <p>{post.content}</p> */}
            </Link>
          ))}
      </div>
      <div className="mt-24 font-bold text-gray-700 text-3xl">My Life</div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {lifes &&
          lifes.map((life) => (
            <Link
              href={"/lifes/${life.slug}"}
              key={life._id}
              className="border-2 border-gray-500 rounded-lg p-1 hover:border-blue-500 sm:hover:scale-105 sm:transition"
            >
              {life.image && (
                <Image
                  className="object-cover rounded-lg border border-gray-500 sm:max-h-64 lg:max-h-none"
                  src={life.image}
                  width={750}
                  height={400}
                  alt=""
                />
              )}
              <div className="mt-2 text-sm bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {life.publishedAt.toString()}
              </div>
              <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {life.title}
              </div>
              {/* <div>{post.description}</div> */}
              {/* <p>{post.content}</p> */}
            </Link>
          ))}
      </div>
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
