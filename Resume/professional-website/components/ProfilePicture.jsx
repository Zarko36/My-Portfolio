import React from "react";
import Image from "next/image";
import pic from "./picture.png";

const ProfilePicture = () => {
  return (
    <div className="relative">
      <Image
        className="object-cover w-48 h-48 rounded-full border-4 border-gray-300"
        src={pic}
        alt="Profile Picture"
        layout="intrinsic"
        width={350}
        height={350}
      />
    </div>
  );
};

export default ProfilePicture;