import Ask from "./ask";
import Response from "./response";
import { useQuery } from "react-query";
import { getMessages } from "../../lib/openai/request";
import Loading from "./loading";
import NotFound from "./notfound";

import styles from "@/styles/Openai.module.css";

export default function Main({ roomid }) {
  const {
    isLoading,
    isError,
    data: messages,
    error,
  } = useQuery(["messages", roomid], () => getMessages(roomid));

  if (isLoading) return <Loading></Loading>;
  if (isError) return <div className="text-center">Error: {error.message}</div>;
  if (messages.length === 0) return <NotFound></NotFound>;

  return (
    // <main className={styles.container}>
    <main className="container px-10 sm:px-20 lg:px-10">
      {/* <div className="mx-auto w-3/5 py-5"> */}
      <div className="mx-auto w-full py-5">
        {messages &&
          messages.map((message, index) => {
            return (
              <div key={index}>
                {/* Ask Component */}
                <Ask q={message.question}></Ask>
                {/* Response */}
                <Response ans={message.answer}></Response>
              </div>
            );
          })}
      </div>
    </main>
  );
}
