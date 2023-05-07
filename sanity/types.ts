import { createClient, groq } from "next-sanity";
import { PortableTextBlock } from "sanity";

export type BPost = {
  _id: string;
  _createdAt: Date;
  publishedAt: Date;
  title: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  content: PortableTextBlock[];
};

export type LPost = {
  _id: string;
  _createdAt: Date;
  publishedAt: Date;
  title: string;
  slug: string;
  image: string;
  url: string;
  description: string;
  content: PortableTextBlock[];
};

// export const client = createClient({
export const sanityConfig = {
  projectId: "poxxqfti",
  dataset: "production",
  apiVersion: "2023-04-24",
  token: process.env.NEXT_SANITY_TOKENS,
  useCdn: true,
};

export async function getPosts(): Promise<BPost[]> {
  const posts = await createClient(sanityConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      publishedAt,
      title,
      description,
      url,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "content": body,
    }`
  );
  return posts;
}

export async function getPost(slug: string): Promise<BPost> {
  return await createClient(sanityConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      publishedAt,
      title,
      description,
      url,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "content": body,
    }`,
    { slug }
  );
}

export async function getLifes(): Promise<LPost[]> {
  const lifes = await createClient(sanityConfig).fetch(
    groq`*[_type == "life"]{
      _id,
      _createdAt,
      publishedAt,
      title,
      description,
      url,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "content": body,
    }`
  );
  return lifes;
}

export async function getLife(slug: string): Promise<LPost> {
  return await createClient(sanityConfig).fetch(
    groq`*[_type == "life" && slug.current == $slug][0]{
      _id,
      _createdAt,
      publishedAt,
      title,
      description,
      url,
      "slug": slug.current,
      "image": mainImage.asset->url,
      "content": body,
    }`,
    { slug }
  );
}
