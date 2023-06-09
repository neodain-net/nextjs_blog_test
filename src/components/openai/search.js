import { BiNavigation } from "react-icons/bi";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { sendMessage } from "../../lib/openai/request";

export default function Search({ roomid }) {
  const [search, setSearch] = useState("");
  const queryclient = useQueryClient();

  const mutation = useMutation(
    (args) => {
      return sendMessage(args);
    },
    {
      onSuccess: () => {
        queryclient.invalidateQueries("messages");
      },
    }
  );

  function onSubmit(e) {
    e.preventDefault();
    mutation.mutate({ roomid, message: search });
    setSearch("");
  }

  if (mutation.isLoading)
    return <div className="text-center text-gray-50">Loading...</div>;
  if (mutation.isError)
    return (
      <div className="text-center text-gray-50">
        {" "}
        Error : {mutation.error.message}
      </div>
    );

  return (
    <div className="fixed bottom-0 left-0 w-full z-11 h-40 text-gray-50 bg-gradient-to-t from-gray-800">
      <div className="grid grid-cols-6 absolute bottom-10 w-full">
        {/* <div className="col-start-2 col-span-6 flex justify-center items-center w-full"> */}
        <div className="sm:col-start-2 col-span-6 flex justify-center items-center w-full">
          <div className="backdrop-opacity-5 backdrop-invert bg-gray-10 w-4/5 md:w-2/3 px-5 border border-gray-600 rounded-lg flex items-center">
            <form className="flex w-full shadow-2xl" onSubmit={onSubmit}>
              <input
                type="text"
                className="w-full py-3 bg-transparent focus:outline-none text-sm"
                autoFocus="autofocus"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">
                <BiNavigation className="text-2xl hover:text-[#10a37f]"></BiNavigation>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
