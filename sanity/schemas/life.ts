import review from "./review";

export default {
  name: "life",
  title: "Life",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "englishTitle",
      title: "English Title",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "geopoint",
    },
    {
      name: "enjoyType",
      title: "Enjoy Type",
      type: "string",
      options: {
        list: [
          { title: "Food", value: "food" },
          { title: "Travel", value: "travel" },
          { title: "Mountain", value: "mountain" },
          { title: "Health", value: "health" },
        ],
        layout: "radio",
      },
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "excitingImage" }],
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "movement",
      title: "Movement",
      type: "string",
      options: {
        list: [
          { title: "walk", value: "walk" },
          { title: "car", value: "car" },
          { title: "bus", value: "bus" },
          { title: "train", value: "train" },
          { title: "air", value: "air" },
          { title: "cruise", value: "cruise" },
        ],
        layout: "radio",
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "englishTitle",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "Id",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      options: {
        maxLength: 30,
      },
    },
    {
      name: "host",
      title: "Host",
      type: "host",
    },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "review",
      title: "Review",
      type: "array",
      of: [{ type: "review" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection: { author: any }) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
