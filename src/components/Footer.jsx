import React, { useContext } from "react";
import { BsCart, BsHouseDoorFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { LogInContext } from "../App";
import FooterIcon from "./FooterIcon";

const Footer = ({ setRoute }) => {
  const { user } = useContext(LogInContext);
  return (
    <footer className="fixed w-full bottom-0 h-24 bg-cyan-200 flex items-center justify-evenly">
      <FooterIcon
        text="Home"
        icon={<BsHouseDoorFill />}
        onClick={() => setRoute("home")}
      />
      <FooterIcon
        text="Shop"
        icon={<BsCart />}
        onClick={() => setRoute("shop")}
      />
      {user && (
        <FooterIcon
          text="Settings"
          icon={<IoSettingsSharp />}
          onClick={() => setRoute("settings")}
        />
      )}
    </footer>
  );
};

export default Footer;
