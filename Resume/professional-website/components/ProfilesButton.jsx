import React from "react";
import Image from "next/image";
import icon1 from "./github.svg";
import icon2 from "./linkedin.svg";

const ProfilesButton = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <button className="bg-white text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-100 flex items-center">
        Github
        <Image
          className="w-12 h-12 ml-6"
          src={icon1}
          alt="Icon 1"
          width={16}
          height={16}
        />
      </button>
      <button className="bg-gray-700 text-gray-300 font-semibold py-2 px-4 rounded-full border border-gray-600 hover:bg-gray-600 flex items-center">
        LinkedIn
        <Image
          className="w-12 h-12 ml-6"
          src={icon2}
          alt="Icon 2"
          width={16}
          height={16}
        />
      </button>
    </div>
  );
};

export default ProfilesButton;