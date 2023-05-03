export default {
  name: "trend",
  title: "Trend",
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
      name: "enjoyType",
      title: "Enjoy Type",
      type: "string",
      options: {
        list: [
          { title: "IT-Tech", value: "it" },
          { title: "Movie", value: "movie" },
          { title: "Music", value: "music" },
          { title: "Fashion", value: "fashion" },
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
    prepare(selection: { author: any }): { subtitle: any; author: any } {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
};
