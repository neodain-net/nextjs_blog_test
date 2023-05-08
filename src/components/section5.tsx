import Image from "next/image";
import Link from "next/link";
import Icons from "./icons";
import { BPost, LPost } from "../../sanity/types";

// NEXT_SANITY_TOKENS=skRNeoOet8iIvOSTbnmIN2mhKM3CfBrkpwdJpVTDqx6NXvYLZjWmhNqDFOF4ZAzGgVIEt3YVuCkBOgjC58xjO7JmjOjoY0KNAYT47ljtMFhWbdcPsWwat9YV0J3aAamCYlGXbRmR05Ffek8K6G2tHry2yLa8aXiqL4rprVhwH748HGHXqozm

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
              { name: "/images/javascript.png" },
              { name: "/images/typescript.png" },
              { name: "/images/nodejs.png" },
              { name: "/images/react.png" },
              { name: "/images/nextjs.png" },
            ]}
          />
        </div>
      </div>
      <div className="mt-10 h-9 justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        <div className="flex items-center">
          <Icons
            icons={[
              { name: "/images/javascript.png" },
              { name: "/images/typescript.png" },
              { name: "/images/nodejs.png" },
              { name: "/images/react.png" },
              { name: "/images/nextjs.png" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { name: "/images/express.png" },
              { name: "/images/python.png" },
              { name: "/images/mysql.png" },
              { name: "/images/sanity.png" },
              { name: "/images/openai.png" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { name: "/images/mongodb.png" },
              { name: "/images/docker.png" },
              { name: "/images/cloud.png" },
              { name: "/images/gallery.png" },
              { name: "/images/disney.png" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { name: "/images/food.png" },
              { name: "/images/travel.png" },
              { name: "/images/music.png" },
              { name: "/images/movie.png" },
              { name: "/images/youtube.png" },
            ]}
          />
        </div>
        <div className="flex items-center">
          <Icons
            icons={[
              { name: "/images/gallery.png" },
              { name: "/images/disney.png" },
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
