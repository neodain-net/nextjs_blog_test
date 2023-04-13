import data from "../data";

// api/posts/1
export default function handler(req, res) {
  const { postId } = req.query;
  const { Popular } = data.jsonData;

  if (postId) {
    const post = Popular.find((value) => value.id == postId);
    return res.status(200).json(post);
  }

  return res.status(404).json({ error: "Post Not Found" });
}
