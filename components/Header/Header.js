import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightBulbIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="m-5 flex flex-col sm:flex-row justify-between ">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="text-center ">
        <Image src="/logo.png" width={80} height={30} />
      </div>
    </header>
  );
};

export default Header;
