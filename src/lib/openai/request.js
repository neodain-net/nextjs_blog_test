import ENV from "../../../config.env.js";

export async function getAllRooms() {
  console.log(`baseurl : ${ENV.BASE_URL}`);
  const { success, data } = await (
    await fetch(`${ENV.BASE_URL}/room`, { mode: "no-cors" })
  ).json();
  if (!success) throw new Error("Error fetching rooms");
  return data;
}

export async function getMessages(roomid) {
  const { success, data } = await (
    await fetch(`${ENV.BASE_URL}/chat/${roomid}`, { mode: "no-cors" })
  ).json();
  if (!success) throw new Error("Error fetching messages");
  return data;
}

export async function createRoom() {
  const { success, data } = await (
    await fetch(`${ENV.BASE_URL}/room`, {
      mode: "no-cors",
      method: "POST",
    })
  ).json();
  if (!success) throw new Error("Error fetching room");
  return data;
}

export async function deleteRoom(roomid) {
  const { success, data } = await (
    await fetch(`${ENV.BASE_URL}/room/${roomid}`, {
      mode: "no-cors",
      method: "DELETE",
    })
  ).json();
  if (!success) throw new Error("Error deleting room");
  return data;
}

export async function sendMessage({ roomid, message }) {
  if (!roomid && !message) throw new Error("Invalid arguments");

  const { success, data } = await (
    await fetch(`${ENV.BASE_URL}/chat/${roomid}`, {
      mode: "no-cors",
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
