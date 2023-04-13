import data from "../data";

export default function hanlder(req, res) {
  const { Popular } = data.jsonData;
  if (Popular) return res.status(200).json(Popular);

  return res.status(404).json({ error: "Data Not Found" });
}
