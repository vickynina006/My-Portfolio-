import Navlist, { Navdot, Navicon } from "./navlist";
import { useState } from "react";
import NavModal from "./navModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const spanStyle =
    "w-5 h-[2px] bg-textblack rounded-full transition duration-500 ease-in-out";

  return (
    <nav className=" bg-backgroundpurple font-bricolage py-10">
      <div className="flex mx-4 text-textblack rounded-full outline outline-1 bg-white outline-blacky justify-between items-center px-8 py-4 md:px-12 md:mx-12">
        <div>
          <h1 className="text-[1.73rem] font-semibold">Vhefolio</h1>
        </div>
        <ul className="hidden text-[1.05rem] font-semibold justify-center items-center gap-5 lg:flex">
          <Navlist href="" title="Home" />
          <Navdot />
          <Navlist href="#about" title="About" />
          <Navdot />
          <Navlist href="#services" title="Services" />
          <Navdot />
          <Navlist href="#projects" title="Projects" />
          <Navdot />
          <Navlist href="#contact" title="Contact" />
        </ul>
        <div className="flex gap-3">
          <div className="hidden space-x-3 sm:flex">
            <Navicon icon="fab fa-whatsapp" />
            <Navicon icon="fab fa-instagram" />
            <Navicon icon="fab fa-telegram" />
          </div>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center gap-1 cursor-pointer px-[0.4rem] py-[0.5rem] z-50 outline  outline-1 outline-blacky rounded-lg shadow-buttonshadow hover:bg-slate-100  lg:hidden "
          >
            <span
              className={`${spanStyle} ${
                isOpen && "rotate-45 translate-y-1.5"
              }`}
            ></span>
            <span className={`${spanStyle} ${isOpen && "opacity-0"}`}></span>
            <span
              className={`${spanStyle} ${
                isOpen && "-rotate-45 -translate-y-1.5"
              }`}
            ></span>
          </div>
        </div>
      </div>
      {isOpen && <NavModal />};
    </nav>
  );
}
