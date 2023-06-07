import Message from "../../../../database/models/message.model";
import Room from "../../../../database/models/room.model";
// import { Configuration, OpenAIApi } from "openai";

/** GET: http://localhost:3000/api/chat/roomid */
export async function getChat(req, res) {
  try {
    const { roomid } = req.query;
    console.log(`this is testing >>>>> ${roomid}`);
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

  /** CONFIG OPEN AI API */
  // const config = new Configuration({
  //   organization: process.env.OPENAI_ORGANIZATION,
  //   apiKey: process.env.OPENAI_API_KEY,
  // });

  // const openai = new OpenAIApi(config);

  // console.log(openai);

  // if (!config.apiKey) {
  //   res.status(500).json({
  //     error: { message: "OpenAI API key not configured" },
  //   });
  //   return;
  // }

  // Only Completion Model using text-davinci-003
  // const completion = await openai.createCompletion({
  //   model: "text-davinci-003",
  //   prompt: question,
  //   temperature: 0.5,
  //   max_tokens: 300,
  //   top_p: 1,
  // });
  const messages = await Message.find({ room: roomid }, { __v: 0, room: 0 });
  console.log(messages);

  const setChatMsg = () => {
    var chatMsg = Array.from(
      messages?.map(
        (message) => (
          {
            role: "user",
            content: message.question,
          },
          {
            role: "assistant",
            content: message.answer,
          }
        )
      )
    );
    chatMsg.push({
      role: "user",
      content: question,
    });
    console.log(chatMsg);
    return chatMsg;
  };

  // Chat Completion Model using gpt-3.5-turbo
  // const completion = await openai.createCompletion({
  //   model: "gpt-3.5-turbo",
  //   messages: setChatMsg(),
  //   temperature: 0.5,
  //   max_tokens: 1000,
  // });

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: setChatMsg(),
      max_tokens: 1000,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    // res.send(data);

    /** specify data to the message model */
    const message = new Message({
      question,
      // answer: completion.data.choices[0].text,
      answer: data.choices[0].message.content,

      // answer: "Now it doesn't work normally.",
      room: roomid,
    });

    // console.log(">>>>> completion : \n" + completion.data.choices[0].text);
    // console.log("\n>>>>> total tokens : " + completion.data.usage.total_tokens);
    // console.log("\n>>>>> completion ended ...");
    console.log(">>>>> completion : \n" + data.choices[0].message.content);
    console.log("\n>>>>> total tokens : " + data.usage.total_tokens);
    console.log("\n>>>>> completion ended ...");

    /** save data in the database */
    await message.save();

    /** push message in the room model */
    rooms.messages.push(message._id);

    /** save data in the room model */
    await rooms.save();

    return res.status(200).json({ success: true, data: message });
  } catch (error) {
    return console.error(error);
  }
}

/** DELETE: http://localhost:3000/api/chat/roomid */
/** So, This is the exercise for you */
