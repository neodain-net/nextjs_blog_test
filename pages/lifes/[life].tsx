import { LPost, getLife } from "../../sanity/types";
import Image from "next/image";

import Icons from "@/src/components/icons";
// import { PortableText, PortableTextComponents } from "@portabletext/react";
import PortableText from "react-portable-text";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

// NEXT_SANITY_TOKENS=skRNeoOet8iIvOSTbnmIN2mhKM3CfBrkpwdJpVTDqx6NXvYLZjWmhNqDFOF4ZAzGgVIEt3YVuCkBOgjC58xjO7JmjOjoY0KNAYT47ljtMFhWbdcPsWwat9YV0J3aAamCYlGXbRmR05Ffek8K6G2tHry2yLa8aXiqL4rprVhwH748HGHXqozm

const icon_list = [
  { name: "/images/nodejs.png" },
  { name: "/images/nodejs.png" },
  { name: "/images/nodejs.png" },
];

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
          <Icons
            icons={[
              { name: "/images/javascript.png" },
              { name: "/images/typescript.png" },
              { name: "/images/mysql.png" },
              { name: "/images/react.png" },
              { name: "/images/nodejs.png" },
            ]}
          />
        </div>
        {/* <div className="mt-24 flex items-center">
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
        </div> */}
        <div>
          <PortableText
            content={life.content}
            projectId="poxxqfti"
            dataset="production"
          />
          {/* <PortableText
            value={life.content}
            components={myPortableTextComponents}
          /> */}
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

// const components: PortableTextComponents = {
//   list: {
//     // Ex. 1: customizing common list types
//     bullet: ({ children }) => <ul className="mt-xl">{children}</ul>,
//     number: ({ children }) => <ol className="mt-lg">{children}</ol>,

//     // Ex. 2: rendering custom lists
//     checkmarks: ({ children }) => (
//       <ol className="m-auto text-lg">{children}</ol>
//     ),
//   },
// };

// Barebones lazy-loaded image component
// const SampleImageComponent = ({ value, isInline }) => {
//   const { width, height } = getImageDimensions(value);
//   return (
//     <img
//       src={urlBuilder()
//         .image(value)
//         .width(isInline ? 100 : 800)
//         .fit("max")
//         .auto("format")
//         .url()}
//       alt={value.alt || " "}
//       loading="lazy"
//       style={{
//         // Display alongside text if image appears inside a block text span
//         display: isInline ? "inline-block" : "block",

//         // Avoid jumping around with aspect-ratio CSS property
//         aspectRatio: width / height,
//       }}
//     />
//   );
// };

const img_components = {
  types: {
    // image: SampleImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

// const myPortableTextComponents: PortableTextComponents = {
//   types: {
//     image: ({ value, isInline }) => {
//       const { width, height } = getImageDimensions(value);
//       return (
//         <img
//           src={urlBuilder()
//             .image(value)
//             .width(isInline ? 100 : 800)
//             .fit("max")
//             .auto("format")
//             .url()}
//           alt={value.alt || " "}
//           loading="lazy"
//           style={{
//             // Display alongside text if image appears inside a block text span
//             display: isInline ? "inline-block" : "block",

//             // Avoid jumping around with aspect-ratio CSS property
//             aspectRatio: width / height,
//           }}
//         />
//       );
//     },
// image: SampleImageComponent,
// image: ({ value }) => <img src={value.imageUrl} />,
// callToAction: ({ value, isInline }) =>
//   isInline ? (
//     <a href={value.url}>{value.text}</a>
//   ) : (
//     <div className="callToAction">{value.text}</div>
//   ),
//   },

//   marks: {
//     link: ({ children, value }) => {
//       const rel = !value.href.startsWith("/")
//         ? "noreferrer noopener"
//         : undefined;
//       return (
//         <a href={value.href} rel={rel}>
//           {children}
//         </a>
//       );
//     },
//   },
// };
