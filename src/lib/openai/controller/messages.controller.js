import Message from "../../../../database/models/message.model";
import Room from "../../../../database/models/room.model";
import { Configuration, OpenAIApi } from "openai";

/** GET: http://localhost:3000/api/chat/roomid */
export async function getChat(req, res) {
  try {
    const { roomid } = req.query;

    console.log(req);
    if (!roomid)
      return res.status(400).json({ error: "No room id present...!" });

    const messages = await Message.find({ room: roomid }, { __v: 0, room: 0 });

    if (!messages)
      return res.status(400).json({ error: "No message found...!" });

    return res.status(200).json({ success: true, data: messages });
  } catch (error) {
    return res.status(400).json({ error });
  }
}

/** POST: http://localhost:3000/api/chat/roomid */
export async function createChat(req, res) {
  const { roomid } = req.query;
  const { question, answer } = req.body;

  if (!roomid) return res.status(400).json({ error: "No room id present...!" });
  if (!question && !answer)
    res.status(400).json({ error: "Cannot get data from the user...!" });

  /** get current room */
  const rooms = await Room.findOne({ _id: roomid });

  if (!rooms) return res.status(400).json({ error: "No room found...!" });

  //   /** CONFIG OPEN AI API */
  //   const config = new Configuration({
  //     apiKey: process.env.OPENAI_API_KEY,
  //   });

  //   console.log(`apiKey : ${config.apiKey}`);

  //   const openai = new OpenAIApi(config);

  //   console.log(openai);

  //   if (!config.apiKey) {
  //     res.status(500).json({
  //       error: { message: "OpenAI API key not configured" },
  //     });
  //     return;
  //   }

  //   const completion = await openai.createCompletion({
  //     model: "text-davinci-003",
  //     prompt: question,
  //     temperature: 0.5,
  //     max_tokens: 100,
  //     top_p: 1,
  //   });

  /** specify data to the message model */
  const message = new Message({
    question,
    // answer: completion.data.choices[0].text,
    answer: "Now it doesn't work normally.",
    room: roomid,
  });

  /** save data in the database */
  await message.save();

  /** push message in the room model */
  rooms.messages.push(message._id);

  /** save data in the room model */
  await rooms.save();

  return res.status(200).json({ success: true, data: message });
}

/** DELETE: http://localhost:3000/api/chat/roomid */
/** So, This is the exercise for you */
