import Head from "next/Head";

/** import all components */
import Aside from "../../src/components/openai/aside";
import Chat from "../../src/components/openai/main";
import Search from "../../src/components/openai/search";
import Loading from "../../src/components/openai/loading";
import Banner from "../../src/components/openai/banner";

import { useState } from "react";
import { useQuery } from "react-query";
import { getAllRooms } from "../../src/lib/openai/request";

export default function Openai() {
  const [roomid, setRoomid] = useState(null);
  const { isLoading, isError, data, error } = useQuery("rooms", getAllRooms);

  if (isLoading) return <Loading></Loading>;
  if (isError)
    return <div className="text-center">Error : {error.message}</div>;
  if (!data) return <div className="text-center">No Messages</div>;

  console.log(data);

  function onRoomClick(roomid) {
    data.filter((room) => {
      if (room._id === roomid) {
        setRoomid(roomid);
      }
    });
  }

  return (
    <>
      <Head>
        <title>Neodain's OpenAI</title>
      </Head>
      <div className="grid grid-cols-6">
        <div className="bg-gray-900 col-span-1 aside z-10 text-gray-50">
          {data && <Aside getRooms={data} handler={onRoomClick}></Aside>}
        </div>
        <div className="bg-gray-800 text-gray-50 col-span-5 min-h-screen h-full mb-40">
          {roomid ? <Chat roomid={roomid}></Chat> : <Banner />}
          {roomid && <Search roomid={roomid}></Search>}
        </div>
      </div>
    </>
  );
}
