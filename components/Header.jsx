import Image from "next/image";
import HuluIcon from "../public/images/hulu.svg";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row mt-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly sm:justify-start max-w-2xl ">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="flex items-center justify-center sm:mr-6 sm:-translate-y-3">
        <Image
          className="object-cover "
          height={40}
          width={80}
          src={HuluIcon}
          alt=""
        />
      </div>
    </header>
  );
}
