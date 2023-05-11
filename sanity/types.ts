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

export async function getPosts() {
  return await createClient(sanityConfig).fetch(
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

export async function getLifes() {
  return await createClient(sanityConfig).fetch(
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
}

export async function getLife(slug: string) {
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
