import Button from "./button";
import { WaveDesktopTop, WaveMobileTop } from "./waveSvg";
import profilePic2 from "../assets/profilePic2.png";
import heartIcon from "../assets/heart-icon.svg";
import lighteningIcon from "../assets/lightening-icon.svg";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
import WaveMobile, { WaveDesktop } from "./waveSvg";

import AboutDIv, { AboutButton } from "./aboutdiv";

export default function AboutSection() {
  return (
    <section className="py-24 " id="about">
      <WaveMobileTop classname=" text-backgroundpurple w-full h-max  lg:hidden " />
      <WaveDesktopTop classname="hidden text-backgroundpurple w-full  h-max lg:flex " />

      <div className="flex flex-col mt-0 py-10 px-3 gap-10 text-textblack bg-backgroundpurple lg:px-8 lg:flex-row">
        <div className="w-full p-5 lg:w-[50%]">
          <img src={profilePic2} alt="" />
        </div>
        <div className="w-full my-auto space-y-5 p-5 lg:w-[50%]  ">
          <h1 className="font-medium text-4xl md:text-[3rem] ">
            More about me
          </h1>
          <p className="text-lg">
            I am Victoria, a multidisciplinary designer and blogger based in the
            vibrant city of Los Angeles. With a keen eye for aesthetics and a
            knack for innovative solutions, I thrive in the dynamic intersection
            of design.
          </p>
          <p className="text-lg">
            I am a Frontend focused developer who likes to craft solid and
            scalable frontend products with great user experience. I am
            passionate about helping businesses establish a strong online
            presence and stand out in their industries.
          </p>
          <div className="flex flex-col pb-5 space-y-4 lg:space-y-0  lg:flex-row">
            <AboutDIv
              title1="Innovative Thinking"
              title2="Wholistic Approach"
            />
            <AboutDIv title1="Rapid Solutions" title2="Talent-focused" />
          </div>
          <Button bg="bg-white">Learn More</Button>
        </div>
      </div>
      <div className="bg-backgroundpurple text-textblack flex flex-col items-center px-5 py-10 ">
        <div className="flex flex-col items-center  lg:px-28 lgx:px-48 gap-3 ">
          <h1 className="text-2xl font-bold md:text-4xl lg:font-semibold">
            My capabilities
          </h1>
          <p className="leading-relaxed text-center text-2xl">
            The services I offer are meticulously crafted and tailored to cater
            specifically to your unique needs and requirements.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 py-10 justify-center">
          <AboutButton title="Web Development" img={heartIcon} />
          <AboutButton title="Graphic Designs" img={star1} />
          <AboutButton title="Responsive Designs" img={star2} />
          <AboutButton title="Digital Solutions" img={lighteningIcon} />
        </div>
      </div>
      <WaveMobile classname=" text-backgroundpurple w-full h-max lg:hidden" />
      <WaveDesktop classname="hidden text-backgroundpurple w-full h-max  lg:flex" />
    </section>
  );
}
