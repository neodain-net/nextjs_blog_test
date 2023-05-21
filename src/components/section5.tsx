import Image from "next/image";
import Link from "next/link";
import Icons from "./icons";
import { BPost, LPost } from "../../sanity/types";

// export default {
//   NEXT_SANITY_TOKENS:
//     "skRNeoOet8iIvOSTbnmIN2mhKM3CfBrkpwdJpVTDqx6NXvYLZjWmhNqDFOF4ZAzGgVIEt3YVuCkBOgjC58xjO7JmjOjoY0KNAYT47ljtMFhWbdcPsWwat9YV0J3aAamCYlGXbRmR05Ffek8K6G2tHry2yLa8aXiqL4rprVhwH748HGHXqozm",
//   ATALAS_URL:
//     "mongodb+srv://neodain:Kht72eye2eye@neocluster.zxfoljf.mongodb.net/?retryWrites=true&w=majority",
// };

export default function section5({
  posts,
  lifes,
}: {
  posts: BPost[];
  lifes: LPost[];
}) {
  return (
    // <section className="mx-auto max-w-6xl px-4 sm:px-5 md:px-40 py-10">
    <section className="mx-auto max-w-6xl px-4 sm:px-5 md:px-10 py-10">
      <div className="text-7xl text-center pb-12">
        <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Sanity Post
        </span>
      </div>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        <div className="font-bold text-gray-700 text-3xl">
          <p className="my-3">My Interests</p>
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/javascript.png", name: "javascript" },
              { path: "/images/typescript.png", name: "typescript" },
              { path: "/images/nodejs.png", name: "nodejs" },
              { path: "/images/react.png", name: "react" },
              { path: "/images/nextjs.png", name: "nextjs" },
            ]}
          />
        </div>
      </div>
      <div className="mt-10 h-9 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/javascript.png", name: "javascript" },
              { path: "/images/typescript.png", name: "typescript" },
              { path: "/images/nodejs.png", name: "nodejs" },
              { path: "/images/react.png", name: "react" },
              { path: "/images/nextjs.png", name: "nextjs" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/express.png", name: "express" },
              { path: "/images/python.png", name: "python" },
              { path: "/images/mysql.png", name: "mysql" },
              { path: "/images/sanity.png", name: "sanity" },
              { path: "/images/openai.png", name: "openai" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/mongodb.png", name: "mongodb" },
              { path: "/images/docker.png", name: "docker" },
              { path: "/images/cloud.png", name: "cloud" },
              { path: "/images/c++.png", name: "c++" },
              { path: "/images/tailwind.png", name: "tailwind" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/simple_food.png", name: "simple food" },
              { path: "/images/travel.png", name: "travel" },
              { path: "/images/music.png", name: "music" },
              { path: "/images/movie.png", name: "movie" },
              { path: "/images/youtube.png", name: "youtube" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/gallery.png", name: "gallery" },
              { path: "/images/git.png", name: "git-hub" },
              { path: "/images/git_black.png", name: "git black" },
              { path: "/images/graphql.png", name: "graphql" },
              { path: "/images/kafka.png", name: "kafka" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { path: "/images/ai.png", name: "ai" },
              { path: "/images/gallery.png", name: "gallery" },
              { path: "/images/disney.png", name: "disney" },
              { path: "/images/food.png", name: "food" },
            ]}
          />
        </div>
      </div>
      <div className="mt-56 sm:mt-32 lg:mt-24 xl:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts &&
          posts.map((post) => (
            <Link
              href={`/posts/${post.slug}`}
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
              href={`/lifes/${life.slug}`}
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

// export async function getServerSideProps() {
//   const posts = await getPosts();
//   const lifes = await getLifes();

//   return { props: { posts, lifes } };
// }
