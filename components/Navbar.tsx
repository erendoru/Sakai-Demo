import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <header className="bg-gray-500 h-16 flex">
      <div className="logo">
        <h1>SAKAİ</h1>
      </div>
      <div className="icon">
        <RxHamburgerMenu />
      </div>
      <div className="settings">
        <h1>Settings</h1>
      </div>
    </header>
  );
};

export default Navbar;
