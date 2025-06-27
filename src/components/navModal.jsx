import Navlist from "./navlist";

export default function NavModal() {
  return (
    <nav className="fixed flex justify-center pt-32 px-10 w-full items-center top-0 right-0 z-10 md:px-20">
      <ul className=" w-full text-[1.05rem] py-12 font-semibold justify-center bg-white items-center gap-5 outline  outline-1 outline-blacky rounded-3xl flex flex-col">
        <Navlist href="" title="Home" />
        <Navlist href="#about" title="About" />
        <Navlist href="#services" title="Services" />
        <Navlist href="#projects" title="Projects" />
        <Navlist href="#contact" title="Contact" />
      </ul>
    </nav>
  );
}
