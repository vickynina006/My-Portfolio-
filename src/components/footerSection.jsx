import WaveMobileTop, { WaveDesktopTop } from "./waveSvg";
import messageIcon from "../assets/message-icon.svg";
import Button from "./button";
import spiral from "../assets/spiral2.svg";
import {
  FaWhatsapp,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer id="contact">
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
        <Button
          animate={{ scale: [1, 0.96, 1, 0.96, 1] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
          bg="bg-white"
          href="https://wa.me/+2347037863173"
          target="_blank"
        >
          Message on whatsapp
        </Button>
        <div className="w-full  h-[0.1rem]  bg-gray-400 mt-10"></div>
        <img
          src={spiral}
          alt=""
          className="hidden lg:flex absolute left-14 lgx:left-20 top-[40%]"
        />
        <div className="flex flex-col w-full gap-6 items-center text-white lg:justify-between lg:flex-row">
          <ul className="flex gap-5">
            <FooterIcons Icon={FaPhone} href="tel:+2347037863173" />
            <FooterIcons
              Icon={FaWhatsapp}
              href="https://wa.me/+2347037863173"
            />
            <FooterIcons
              Icon={FaGithub}
              href="https://github.com/vickynina006"
            />
            <FooterIcons Icon={FaEnvelope} href="mailto:vickynina006.com" />
            <FooterIcons
              Icon={FaLinkedin}
              href="https://www.linkedin.com/in/nweke-victoria-2b35551b5"
            />
          </ul>
          <p>© 2025. Built by Victoria.</p>
        </div>
      </div>
    </footer>
  );
}

export function FooterIcons({ href, Icon }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        className="cursor-pointer w-7 h-7 flex items-center justify-center outline rounded-full outline-1 text-slate-100 outline-slate-100 hover:text-violet-200 hover:outline-violet-200"
      >
        <Icon className="text-xs" />
      </a>
    </li>
  );
}
