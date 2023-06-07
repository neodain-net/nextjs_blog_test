import Image from "next/image";

export default function Ask({ q }) {
  return (
    // <div className="grid grid-cols-12 bg-gray-700 rounded-full">
    <div className="flex bg-gray-700 py-4">
      <div className="flex-none max-h-10 icon bg-indigo-500 p-1 w-10">
        <Image
          src="/images/author12.png"
          width={44}
          height={44}
          alt="profile"
        ></Image>
      </div>
      <div className="question px-4 flex flex-col justify-center">
        <span className="text-md">{q}</span>
      </div>
    </div>
  );
}
