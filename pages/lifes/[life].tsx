import { LPost, getLife } from "../../sanity/types";
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

export default function Life({ life }: { life: LPost }) {
  return (
    <section className="container py-40 mt-20 mx-auto px-4 sm:px-5 md:px-20">
      <div className="text-7xl text-center pb-12">
        <span className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Sanity Post
        </span>
      </div>
      <div className="mt-24">
        <div className="font-bold text-gray-700 text-3xl">
          <p className="my-3">My Life</p>
          <p className="my-3 text-gray-500 text-xl">
            title : {life && life.title}
          </p>
          <p className="my-3 text-gray-500 text-xl">
            description : {life && life.description}
          </p>
          <p className="my-3 text-gray-500 text-xl">
            publishedAt : {life && life.publishedAt.toString()}
          </p>
          <p className="my-3 text-gray-500 text-xl">
            slug : {life && life.slug}
          </p>
          <p className="my-3 text-gray-500 text-xl">id : {life && life._id}</p>
          <Image
            className="object-cover rounded-lg border border-gray-500"
            src={life && life.image}
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
          <PortableText value={life && life.content} />
        </div>
      </div>
    </section>
  );
}

type Props = {
  params: { life: string };
};

export async function getServerSideProps({ params }: Props) {
  const slug = params.life;
  const life = await getLife(slug);
  return { props: { life } };
}
