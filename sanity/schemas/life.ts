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
        source: "title",
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
    },
    // {
    //   name: "host",
    //   title: "Host",
    //   type: "host",
    // },
    {
      name: "url",
      title: "Url",
      type: "url",
    },
    {
      name: "contnt",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "review",
      title: "Review",
      type: "array",
      of: [{ type: "review" }],
    },
  ],
};
