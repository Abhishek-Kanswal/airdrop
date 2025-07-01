import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { toggleTheme } from "../../app/features/ThemeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@/components/ui/switch"
// import Button from "../ui/button";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="sticky top-0 z-50 w-full h-[9vh] border-b border-toggleBg backdrop-blur-lg">
        <div className="container mx-auto flex items-center justify-between h-full p-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl text-foreground">DropScan</span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-10">
            {["Home", "Market", "Trade", "NFT"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold py-8"
                    : "text-foreground hover:text-blue-400 py-8"
                }
              >
                {item}
              </NavLink>
            ))}
            <div className="flex items-center space-x-6 text-foreground cursor-pointer">
              <div className="hover:text-primary">Sign</div>
              
              {/* Theme Toggle Button */}
              <button
                className="flex gap-2 p-2 rounded-full text-foreground hover:bg-toggleBg transition-colors"
                onClick={handleThemeToggle}
              >
                {theme === "light" ? (
                  <Sun className="w-5 h-5 text-foreground" />
                ) : (
                  <Moon className="w-5 h-5 text-foreground" />
                )}
              </button>

              <NavLink
                to="/app"
                className="bg-gradient-to-r from-yellow-400  to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 p-2 text-white rounded-md"
              >
                Access App
              </NavLink>

            </div>
          </div>

          <div className="md:hidden">
            {isOpen ? (
              <X
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white cursor-pointer"
              />
            ) : (
              <Menu
                onClick={() => setIsOpen(true)}
                className="text-zinc-400 hover:text-white cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="w-[40%] bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="w-[60%] bg-background p-8 flex flex-col items-start space-y-8 border-l border-zinc-800">
            {["a", "Home", "Market", "Trade", "NFT"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-bold underline"
                    : "text-foreground text-lg"
                }
              >
                {item}
              </NavLink>
            ))}

            {/* Theme Toggle Button in Mobile Menu */}
            <button
              className="rounded-full text-foreground flex items-center space-x-2"
              onClick={handleThemeToggle}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-foreground" />
              )}
              <span>{theme === "dark" ? "Light" : "Dark"}</span>
            </button>

            <NavLink
              to="/app"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-yellow-400  to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 p-2 text-white rounded-md"
            >
              Access App
            </NavLink>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
