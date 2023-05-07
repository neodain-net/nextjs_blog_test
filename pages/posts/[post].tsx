import { BPost, getPost, getPosts } from "../../sanity/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import {
  HamburgIcon,
  LogoIcon,
  NodejsIcon,
  ExpressIcon,
  MysqlIcon,
  NextjsIcon,
  ReactIcon,
  SanityIcon,
  PythonIcon,
  FoodIcon,
  MusicIcon,
  TravelIcon,
  YoutubeBlackIcon,
  YoutubeRedIcon,
  OpenaiIcon,
  JavascriptIcon,
  TypescriptIcon,
  CloudUploadIcon,
  CloudDownloadIcon,
  DockerIcon,
  MongodbIcon,
  DisneyIcon,
  GalleryIcon,
  MovieIcon,
} from "@/src/components/assets/icons";

import { GetServerSideProps, GetStaticProps } from "next";
import { PortableTextBlock } from "sanity";

// NEXT_SANITY_TOKENS=skRNeoOet8iIvOSTbnmIN2mhKM3CfBrkpwdJpVTDqx6NXvYLZjWmhNqDFOF4ZAzGgVIEt3YVuCkBOgjC58xjO7JmjOjoY0KNAYT47ljtMFhWbdcPsWwat9YV0J3aAamCYlGXbRmR05Ffek8K6G2tHry2yLa8aXiqL4rprVhwH748HGHXqozm

export default function Post({ post }: { post: BPost }) {
  return (
    <section className="container py-40 mt-20 mx-auto px-4 sm:px-5 md:px-20">
      <div className="text-7xl text-center pb-12">
        <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Sanity Post
        </span>
      </div>
      <div className="mt-24">
        <div className="font-bold text-gray-700 text-3xl">
          <p className="my-3">My Interests</p>
          <p className="my-3">title : {post.title}</p>
          <p className="my-3">description : {post.description}</p>
          <p className="my-3">publishedAt : {post.publishedAt.toString()}</p>
          <p className="my-3">slug : {post.slug}</p>
          <p className="my-3">id : {post._id}</p>
          <Image
            className="object-cover rounded-lg border border-gray-500"
            src={post.image}
            width={750}
            height={400}
            alt=""
          />
        </div>
        <div className="mt-24 flex items-center">
          <span className="svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
            <NodejsIcon />
          </span>
          <div className="w-1"></div>
          <span className="svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
            <JavascriptIcon />
          </span>
          <div className="w-1"></div>
          <span className="svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
            <TypescriptIcon />
          </span>
        </div>
        <div>
          <PortableText value={post.content} />
        </div>
      </div>
    </section>
  );
}

type Props = {
  params: { post: string };
};

export async function getServerSideProps({ params }: Props) {
  const slug = params.post;
  const post = await getPost(slug);
  return { props: { post } };
}

// export default function post({ posts }: { posts: BPost[] }) {
// return (
//   <section className="container py-40 mt-20 mx-auto px-4 sm:px-5 md:px-20">
//     <div className="text-7xl text-center pb-12">
//       <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
//         Sanity Post
//       </span>
//     </div>
//     <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
//       <div className="font-bold text-gray-700 text-3xl">
//         <p className="my-3">My Interests</p>
//       </div>
//       <div className="flex items-center">
//         <span className="svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//           <NodejsIcon />
//         </span>
//         <div className="w-1"></div>
//         <span className="svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//           <JavascriptIcon />
//         </span>
//         <div className="w-1"></div>
//         <span className="svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//           <TypescriptIcon />
//         </span>
//       </div>
//     </div>
//     <div className="h-9 flex justify-center items-center">
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <ReactIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <ExpressIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <NodejsIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <JavascriptIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <TypescriptIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <NextjsIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <PythonIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <MysqlIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <SanityIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <FoodIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <TravelIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <MusicIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <YoutubeBlackIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <YoutubeRedIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <OpenaiIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <CloudUploadIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <CloudDownloadIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <DockerIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <MongodbIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <DisneyIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <GalleryIcon />
//       </div>
//       <div className="flex w-1 h-6"></div>
//       <div className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
//         <MovieIcon />
//       </div>
//     </div>
//     <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//       {posts &&
//         posts.map((post) => (
//           <Link
//             href={`/posts/${post.slug}`}
//             key={post._id}
//             className="border-2 border-gray-500 rounded-lg p-1 hover:border-blue-500 sm:hover:scale-105 sm:transition"
//           >
//             {post.image && (
//               <Image
//                 className="object-cover rounded-lg border border-gray-500"
//                 src={post.image}
//                 width={750}
//                 height={400}
//                 alt=""
//               />
//             )}
//             <div className="mt-2 text-sm bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
//               {post.publishedAt.toString()}
//             </div>
//             <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
//               {post.title}
//             </div>
//             {/* <div>{post.description}</div> */}
//             {/* <p>{post.content}</p> */}
//           </Link>
//         ))}
//     </div>
//   </section>
// );
// }
