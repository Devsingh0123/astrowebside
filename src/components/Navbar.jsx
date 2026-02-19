import React from "react";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
import logo from "../assets/logo-light.png";
import LanguageSwitcher from "@/LanguageSwitcher";

const Navbar = () => {
  return (
    <header className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LEFT SIDE - LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto"
          />
        </Link>
<LanguageSwitcher/>
        {/* RIGHT SIDE - USER LOGIN */}
        <div>
          <UserLogin />
        </div>

      </div>
    </header>
  );
};

export default Navbar;
