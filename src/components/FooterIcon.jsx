import React from "react";

const FooterIcon = ({ text, icon, onClick }) => (
  <div
    className="flex flex-col justify-center items-center text-white hover:bg-cyan-100 p-2 transition cursor-pointer rounded"
    onClick={onClick}
  >
    <div className="bg-cyan-500 text-2xl rounded-full w-12 h-12 flex items-center justify-center">
      {icon}
    </div>
    <span className="text-cyan-800">{text}</span>
  </div>
);

export default FooterIcon;
