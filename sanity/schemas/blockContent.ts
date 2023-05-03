export default {
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
    },
    {
      type: "image",
      options: { hotspot: true },
    },
  ],
};
