import React from "react";
import { navLinks } from "../constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { About } from "./About";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 600) {
        setScrolled(true);
      } else {
        setScrolled(false);
        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
    className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? " bg-slate-600 " : " bg-slate-500"
      }`}
    >
      <div className=" w-full flex justify-between items-center  max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("0,0");
            window.scrollTo(0, 0);
          }}
        >
          <p className=" text-white text-[18px] font-bold cursor-pointer flex ">
            Hussain &nbsp; 
            <span className="sm:block hidden">| Gawhari</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
            
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                    About
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <ul  className='list-none hidden sm:flex flex-row gap-10'>
                {navLinks.map((nav) =>(
                    <li
                        key = {nav.id}
                        className = {`${
                            active === nav.title ? " text-white " :  "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointers`}
                            onClick={() => this.setActive(nva.title)}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>

                    </li>
                ))}

            </ul> */}

      </div>
    </nav>
  );
};

export default Navbar;
