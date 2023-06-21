import { BPost, getPost } from "../../sanity/types";
// import { PortableText } from "@portabletext/react";
import PortableText from "react-portable-text";
import Nav from "@/src/components/Nav";
import Icons from "@/src/components/icons";
import Image from "next/image";

// NEXT_SANITY_TOKENS=skRNeoOet8iIvOSTbnmIN2mhKM3CfBrkpwdJpVTDqx6NXvYLZjWmhNqDFOF4ZAzGgVIEt3YVuCkBOgjC58xjO7JmjOjoY0KNAYT47ljtMFhWbdcPsWwat9YV0J3aAamCYlGXbRmR05Ffek8K6G2tHry2yLa8aXiqL4rprVhwH748HGHXqozm

export default function Post({ post }: { post: BPost }) {
  return (
    <>
      <Nav />
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
            <Icons
              icons={[
                { path: "/images/javascript.png", name: "javascript" },
                { path: "/images/typescript.png", name: "typescript" },
                { path: "/images/mysql.png", name: "mysql" },
                { path: "/images/react.png", name: "react" },
                { path: "/images/nodejs.png", name: "nodejs" },
              ]}
            />
          </div>
          <div className="block__contents">
            <PortableText
              content={post.content}
              projectId="poxxqfti"
              dataset="production"
            />
          </div>
        </div>
      </section>
    </>
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
