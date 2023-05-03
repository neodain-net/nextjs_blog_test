export default {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: 'Please use "Firstname Lastname" English format',
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "Id",
      type: "number",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
  // name 대신 id를 사용하여 preview 내용을 변경 할 수 있다
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
