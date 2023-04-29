import { createClient } from "next-sanity";
import { PortableTextBlock } from "sanity";

export interface BPost {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock[];
}

export const client = createClient({
  projectId: "poxxqfti",
  dataset: "production",
  apiVersion: "2023-04-24",
  token: process.env.NEXT_SANITY_TOKENS,
  useCdn: true,
});

// export async function getPosts(): Promise<BPost[]> {
//   const client = createClient({
//     projectId: "poxxqfti",
//     dataset: "production",
//     apiVersion: "2023-04-24",
//   });

//   return client.fetch(
//     groq`*[_type == "post"] {
//         _id,
//         _createdAt,
//         name,
//         "slug": slug.current,
//         "image": image.asset->url,
//         url,
//         content,
//     }`
//   );
// }
