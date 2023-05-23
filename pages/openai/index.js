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
  const { isLoading, isError, data, error } = useQuery("rooms", getAllRooms);

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

  console.log(openaiBtn);
  return (
    <>
      <Head>
        <title>Neodain's OpenAI</title>
      </Head>
      {/* // grid-cols-6 : grid를 사용하여 col수를 6개로 한다. */}
      {/* <div className="grid grid-cols-6"> */}
      <div className="flex">
        <div
          // col-span-6 : 6개의 cols들에서 6개의 cols를 사용한다
          className={
            // openaiBtn ? "col-span-6" : "col-span-6"
            openaiBtn ? "w-full sm:w-60" : "w-0 sm:w-60"
          }
        >
          {/* <div className="hidden md:grid bg-gray-900 md:col-span-1 z-10 text-gray-50"> */}
          {/* <div className="md:grid bg-gray-900 sm:w-60 md:col-span-1 z-10 text-gray-50"> */}
          <div className="bg-gray-900 sm:w-60 z-10 text-gray-50">
            {data && (
              <Aside
                getRooms={data}
                handler={onRoomClick}
                handler1={onOpenaiBtnClick}
              ></Aside>
            )}
          </div>
        </div>
        {/* <div className={openaiBtn ? "col-span-6" : "col-span-6"}> */}
        <div className={openaiBtn ? "w-full sm:flex" : "w-full sm:flex"}>
          {/* <div className="bg-gray-800 text-gray-50 col-span-6 sm:pl-2 md:col-span-5 min-h-screen h-full mb-40"> */}
          <div className="bg-gray-800 text-gray-50 sm:pl-2 min-h-screen h-full min-w-full mb-40">
            {roomid ? <Chat roomid={roomid}></Chat> : <Banner />}
            {roomid && <Search roomid={roomid}></Search>}
          </div>
        </div>
      </div>
    </>
  );
}
