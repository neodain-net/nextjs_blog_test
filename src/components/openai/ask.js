import Image from "next/image";

export default function Ask({ q }) {
  return (
    // <div className="grid grid-cols-12 bg-gray-700 rounded-full">
    <div className="grid grid-cols-12 bg-gray-700">
      <div className="icon col-span-1 bg-indigo-500 mr-auto rounded-full p-2">
        <Image
          src="/assets/man.png"
          width={50}
          height={50}
          alt="profile"
        ></Image>
      </div>
      <div className="question col-span-11 px-4 flex flex-col justify-center">
        <span className="text-md">{q}</span>
      </div>
    </div>
  );
}
