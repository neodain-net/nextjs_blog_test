import ENV from "../../../config.env.js";

export async function getAllRooms() {
  // console.log(`baseurl : ${ENV.BASE_URL}`);
  const { success, data } = await (
    await fetch(`${ENV.BASE_URL}/openai`)
  ).json();
  // const { success, data } = await (await fetch(`api/room`)).json();
  if (!success) throw new Error("Error fetching rooms");
  return data;
}

// export async function getAllRooms() {
//   console.log(`baseurl : ${ENV.BASE_URL}`);
//   const res = await axios({
//     method: "get",
//     url: `${ENV.BASE_URL}/room`,
//   });
//   console.log(res);
//   return res;
//   // .then(function (response) {
//   //   console.log(response);
//   //   return response.data;
//   // })
//   // .catch(function (error) {
//   //   console.log(error);
// }

export async function getMessages(roomid) {
  const { success, data } =
    await // await fetch(`${ENV.BASE_URL}/chat/${roomid}`)
    (await fetch(`${ENV.BASE_URL}/chat/${roomid}`)).json();
  // (await fetch(`api/chat/${roomid}`)).json();
  if (!success) throw new Error("Error fetching messages");
  return data;
}

export async function createRoom() {
  const { success, data } = await // await fetch(`${ENV.BASE_URL}/room`, {
  // await fetch(`api/room`, {
  (
    await fetch(`${ENV.BASE_URL}/room`, {
      method: "POST",
    })
  ).json();
  if (!success) throw new Error("Error fetching room");
  return data;
}

export async function deleteRoom(roomid) {
  const { success, data } =
    await // await fetch(`${ENV.BASE_URL}/room/${roomid}`, {
    // await fetch(`api/room/${roomid}`, {
    (
      await fetch(`${ENV.BASE_URL}/room/${roomid}`, {
        method: "DELETE",
      })
    ).json();
  if (!success) throw new Error("Error deleting room");
  return data;
}

export async function sendMessage({ roomid, message }) {
  if (!roomid && !message) throw new Error("Invalid arguments");

  const { success, data } =
    await // await fetch(`${ENV.BASE_URL}/chat/${roomid}`, {
    // await fetch(`api/chat/${roomid}`, {
    (
      await fetch(`${ENV.BASE_URL}/chat/${roomid}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: message }),
      })
    ).json();

  if (!success) throw new Error("Error sending message");
  return { success, data };
}
