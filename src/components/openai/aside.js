import { BiPlus, BiComment, BiTrashAlt } from "react-icons/bi";
import { useMutation, useQueryClient } from "react-query";
import { createRoom, deleteRoom } from "../../lib/openai/request";
import { HamburgIcon } from "@/src/components/assets/icons";
import { useState } from "react";

export default function Aside({ getRooms, handler, handler1 }) {
  const [openaiBtn, setopenaiBtn] = useState(false);
  const queryclient = useQueryClient();

  /** create new room */
  const createMutation = useMutation(createRoom, {
    onSuccess: () => {
      queryclient.invalidateQueries("rooms");
    },
  });

  /** delete room */
  const deleteMutation = useMutation(deleteRoom, {
    onSuccess: () => {
      queryclient.invalidateQueries("rooms");
    },
  });

  return (
    // <aside className="invisible sm:visible w-0 fixed left-0 sm:w-60 h-screen bg-gray-900">
    <aside className="fixed sm:w-60 left-0 h-screen bg-gray-900 text-sm">
      <div className="visible sm:invisible ">
        <button
          className="openai-btn justify-center"
          // onClick={() => { setopenaiMenu(!openaiMenu); }}
          onClick={() => {
            handler1(openaiBtn);
            setopenaiBtn(!openaiBtn);
          }}
        >
          <HamburgIcon w-12 h-12 />
        </button>
      </div>
      <div className={openaiBtn ? "visible w-full" : "invisible w-0"}>
        <div className="sm:visible fixed left-0 w-full h-full sm:w-60 sm:h-full bg-gray-900">
          <div className="text-gray-50 flex flex-col py-3 gap-5 justify-between w-full h-full">
            <div
              className={
                openaiBtn
                  ? "mt-16 w-full h-20 sm:w-60 items-center justify-center flex"
                  : "flex mx-5"
              }
            >
              <button
                className={
                  openaiBtn
                    ? "flex h-12 justify-center items-center border rounded-md border-gray-600 w-full mx-5 hover:bg-indigo-600"
                    : "flex h-12 mt-2 justify-center items-center border rounded-md border-gray-600 sm:w-60 hover:bg-indigo-600"
                }
                onClick={() => {
                  createMutation.mutate();
                }}
              >
                <span className="flex py-3">
                  <BiPlus className="inline plus w-6" size={16} />
                </span>
                <p className="flex px-2">New Chat</p>
              </button>
            </div>
            <div className="chat_list w-full flex flex-col gap-4 px-5">
              {getRooms.map((room, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-14 border-0 rounded-md bg-gray-800 py-1 px-3 flex justify-center items-center"
                  >
                    <button
                      className="text-left truncate w-full active:bg-violet-700"
                      onClick={() => handler(room._id)}
                    >
                      <span className="block py-3 text-gray-50">
                        <BiComment
                          className="inline mx-2 chat w-6"
                          size={16}
                        ></BiComment>
                        {room.name || "Chat Name Here"}
                      </span>
                    </button>
                    <button
                      onClick={() => deleteMutation.mutate(room._id)}
                      className=" bg-gradient-to-l from-gray-800 h-14 items-center py-3 px-3 hover:text-indigo-400"
                    >
                      <BiTrashAlt className="trash justify-center w-6" />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex w-full h-12 border-t justify-center items-center">
              <nav className="py-2.5 my-2.5">
                <p>Made by Neodain</p>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
