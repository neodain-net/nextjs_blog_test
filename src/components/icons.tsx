// file : @src/components/Icon.tsx
import Image from "next/image";

type Icon = {
  path: string;
  name: string;
};

export default function Icons({ icons }: { icons: Icon[] }) {
  return (
    <div className="flex items-center space-x-1">
      {icons &&
        icons.map((icon) => (
          <div>
            <div key={icon.name}>
              <span className="flex w-8 h-8 border-2 border-orange-200 rounded-lg hover:border-blue-500 sm:hover:scale-105 sm:transition">
                <Image
                  className="rounded-md"
                  src={icon.path}
                  width={32}
                  height={32}
                  alt=""
                  title={icon.name}
                />
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
