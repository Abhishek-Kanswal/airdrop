import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
      <div className="flex w-full h-14 md:h-16 bg-[#09090a]">
        <div className="bg-[#0b0b0b] text-white w-full max-w-[1200px] h-14 md:h-16 px-6 flex items-center justify-center mx-auto rounded-b-lg shadow-[0_4px_10px_rgba(255,255,255,0.1)] border border-gray-600">
          <div className="flex items-center justify-center gap-12 select-none">

            {/* HOME */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 m-8 p-2 rounded-[50px] ${
                  isActive ? 'bg-neutral-900' : 'hover:bg-neutral-900'
                }`
              }
            >
              <img src="/icon/home.svg" className="invert" alt="Home Icon" />
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wide text-gray-300">
                Home
              </span>
            </NavLink>

            {/* AIRDROP */}
            <NavLink
              to="/airdrop"
              className={({ isActive }) =>
                `flex items-center gap-2 m-8 p-2 rounded-[50px] ${
                  isActive ? 'bg-neutral-900' : 'hover:bg-neutral-900'
                }`
              }
            >
              <img src="/icon/wallet-line.svg" className="invert" alt="Airdrop Icon" />
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wide text-gray-300">
                Airdrop
              </span>
            </NavLink>

            {/* NOTIFICATION */}
            <NavLink
              to="/notification"
              className={({ isActive }) =>
                `flex items-center gap-2 m-8 p-2 rounded-[50px] ${
                  isActive ? 'bg-neutral-900' : 'hover:bg-neutral-900'
                }`
              }
            >
              <img src="/icon/bell.svg" className="invert" alt="Notification Icon" />
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wide text-gray-300">
                Notification
              </span>
            </NavLink>

            {/* SETTINGS */}
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center gap-2 m-8 p-2 rounded-[50px] ${
                  isActive ? 'bg-neutral-900' : 'hover:bg-neutral-900'
                }`
              }
            >
              <img src="/icon/settings.svg" className="invert" alt="Settings Icon" />
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wide text-gray-300">
                Settings
              </span>
            </NavLink>

            {/* PROFILE */}
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center gap-2 m-8 p-2 rounded-[50px] ${
                  isActive ? 'bg-neutral-900' : 'hover:bg-neutral-900'
                }`
              }
            >
              <img src="/icon/profile.svg" className="invert" alt="Profile Icon" />
              <span className="text-[16px] md:text-[18px] lg:text-[20px] font-medium tracking-wide text-gray-300">
                Profile
              </span>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;