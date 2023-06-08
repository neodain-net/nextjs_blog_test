import Head from "next/head";

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
  const [openaiBtn, setOpenaiBtn] = useState(false);
  // const { isLoading, isError, data, error } = useQuery("rooms", getAllRooms);
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => getAllRooms(),
  });

  if (isLoading) return <Loading></Loading>;
  if (isError)
    return <div className="text-center">Error : {error.message}</div>;
  if (!data) return <div className="text-center">No Messages</div>;

  function onRoomClick(roomid) {
    data.filter((room) => {
      if (room._id === roomid) {
        setRoomid(roomid);
      }
    });
  }

  function onOpenaiBtnClick(openaiBtn) {
    setOpenaiBtn(!openaiBtn);
  }

  return (
    <>
      <Head>
        <title>Neodain's OpenAI</title>
      </Head>
      <div className="flex">
        <div className={openaiBtn ? "w-full sm:w-60" : "w-0 sm:w-60 sm:h-full"}>
          <div className="bg-gray-900 sm:w-60 sm:h-full z-10 text-gray-50">
            {data && (
              <Aside
                getRooms={data}
                handler={onRoomClick}
                handler1={onOpenaiBtnClick}
              ></Aside>
            )}
          </div>
        </div>
        <div className={openaiBtn ? "hidden w-full sm:flex" : "w-full"}>
          <div className="bg-gray-800 text-gray-50 sm:pl-2 sm:w-full min-w-full h-full min-h-screen">
            {roomid ? <Chat roomid={roomid}></Chat> : <Banner />}
            {roomid && <Search roomid={roomid}></Search>}
          </div>
        </div>
      </div>
    </>
  );
}
