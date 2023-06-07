import Image from "next/image";
import Code from "./code";

export default function Response({ ans }) {
  const code = ans;
  return (
    <div className="flex py-4">
      <div className="flex-none icon max-h-10 bg-[#10a37f] rounded-full p-1 w-10">
        <Image
          src="/assets/ChatGPT_logo.png"
          width={44}
          height={44}
          alt="profile"
        ></Image>
      </div>
      <div className="answer px-4">
        {/* <p className="text-lg py-4 whitespace-pre-wrap">{code}</p>; */}
        <Code text={code} />
      </div>
    </div>
  );
}
