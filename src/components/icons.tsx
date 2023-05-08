// file : @src/components/Icon.tsx
import Image from "next/image";

type Icon = {
  name: string;
};

export default function Icons({ icons }: { icons: Icon[] }) {
  return (
    <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      <div className="font-bold text-gray-700 text-3xl items-center">
        <p>My Interests</p>
      </div>
      <div className="flex items-center space-x-2">
        {icons &&
          icons.map((icon) => (
            <div>
              <div key={icon.name}>
                <span className="flex svg:w-6 svg:h-6 svg:p-1 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
                  <Image src={icon.name} width={24} height={24} alt="" />
                </span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
