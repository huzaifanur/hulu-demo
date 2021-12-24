import { useRouter } from "next/router";
import { categories } from "../utils/requests";
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="mt-5 flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(categories).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`./?genre=${key}`)}
            className="last:pr-18 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 "></div>
    </nav>
  );
}
