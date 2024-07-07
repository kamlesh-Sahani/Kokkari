import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="flex gap-10 justify-center items-center flex-col py-10">
      <Link href={"/"}>
        <img src="/logo.png" alt="kokkari_logo" className=" h-28" />
      </Link>

      <div className="flex gap-7 ">
      <Link href={"/"} className="text-2xl text-[#907045] font-light">
          HOME
        </Link>
        <Link href={"/about"} className="text-2xl text-[#907045] font-light">
          ABOUT
        </Link>
        <Link href={"/cuisine"} className="text-2xl text-[#907045] font-light">
          CUISINE
        </Link>
        <Link
          href={"/privacy-dinning"}
          className="text-2xl text-[#907045] font-light"
        >
          PRIVACY DINNING
        </Link>
      </div>
    </div>
  );
};

export default Header;
