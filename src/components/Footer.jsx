import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-20 justify-center items-center  text-[#353535] w-full ">
      <div className="flex gap-10">
        <Link href={"/"} className="text-xl  font-light">
          PRESS ROOM
        </Link>
        <Link href={"/"} className="text-xl  font-light">
          GIFT CERTIFICATES & COOKBOOK
        </Link>
        <Link href={"/"} className="text-xl font-light">
          CONTACT
        </Link>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center ">
        <p className="text-xl">KOKKARI | EVVIA</p>
        <div className=" flex flex-col gap-2 justify-center items-center">
          <p className="text-xl">KOKKARI ESTIATORIO</p>
          <p className="text-xl">200 Jackson Street (at Front St.)</p>
          <p className="text-xl">San Francisco, CA 94111</p>
          <p className="text-xl">
            p: <span className="text-[#997023]">415.981.0983</span>
          </p>
        </div>

        <div className=" flex flex-col gap-2 justify-center items-center text-[#997023]">
          <p className="text-xl">Reservations & hours</p>
          <p className="text-xl">Directions</p>
        </div>
      </div>
      <div className="bg-black text-[#eee] flex justify-around w-full p-8">
        <p>© 2024 Kokkari</p>
        <p>Photos by Sara Remington | Site by TenyaPartners</p>
      </div>
    </div>
  );
};

export default Footer;
