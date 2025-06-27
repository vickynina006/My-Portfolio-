import WaveMobileTop, { WaveDesktopTop } from "./waveSvg";
import messageIcon from "../assets/message-icon.svg";
import Button from "./button";
import spiral from "../assets/spiral2.svg";

export default function FooterSection() {
  return (
    <footer>
      <WaveMobileTop classname=" text-darkbg w-full h-max  lg:hidden rotate-180" />
      <WaveDesktopTop classname="hidden text-darkbg w-full  h-max lg:flex " />
      <div className="relative font-bricolage bg-darkbg gap-10  flex flex-col px-5 items-center py-16 md:px-14">
        <img src={messageIcon} alt="message" className="w-20 h-20" />
        <h1 className="text-4xl text-white text-center leading-tight md:text-7xl lg:w-[60%] lgx:w-1/2">
          Let's talk about your project.
        </h1>
        <p className="text-[1.4rem] text-white lg:w-[60%] lgx:w-1/2 text-center ">
          Got a project in mind? Let's create something great. We can transform
          that idea into real product.
        </p>
        <Button bg="bg-white">Contact Me</Button>
        <div className="w-full  h-[0.1rem]  bg-gray-400 mt-10"></div>
        <img
          src={spiral}
          alt=""
          className="hidden lg:flex absolute left-14 lgx:left-20 top-[40%]"
        />
        <div className="flex flex-col w-full gap-6 items-center text-white lg:justify-between lg:flex-row">
          <span className="flex gap-5">
            <FooterIcons icon="fa fa-phone" />
            <FooterIcons icon="fab fa-whatsapp" />
            <FooterIcons icon="fab fa-instagram" />
            <FooterIcons icon="fab fa-telegram" />
            <FooterIcons icon="fab fa-linkedin" />
          </span>
          <p>© 2025 Victoria. All rIghts reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function FooterIcons({ href, icon }) {
  return (
    <a
      href={href}
      className="cursor-pointer w-7 h-7 flex items-center justify-center outline rounded-full outline-1 text-slate-100 outline-slate-100 hover:text-violet-200 hover:outline-violet-200"
    >
      <i className={`${icon} text-xs  `}></i>
    </a>
  );
}
