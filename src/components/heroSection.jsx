import HeroSideDivs from "./heroSideDivs";
import doubleLine from "../assets/double-line-icon.svg";
import tripleLine from "../assets/triple-line-icon.svg";
import sparkle from "../assets/sparkle-icon.svg";
import hand from "../assets/hand-icon.svg";
import pencil from "../assets/pencil-icon.svg";
import spiral from "../assets/spiral-icon.svg";
import WaveMobile, { WaveDesktop } from "./waveSvg";

import HeroAbout from "./heroAbout";
import cvIcon from "../assets/cv-icon.svg";
import aboutIcon from "../assets/about-icon.svg";
import contactIcon from "../assets/contact-icon.svg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroAboutdata = [
    {
      src: contactIcon,
      title: "Contact Me",
      description: "Get in touch with me ",
      bg: "bg-buttonGreen",
      href: "#contact",
    },
    {
      src: cvIcon,
      title: "My Toolbox",
      description: "Check out the tools I build with ",
      bg: "bg-buttonBlue",
      href: "#tools",
    },
    {
      src: aboutIcon,

      title: "My CV",
      description: "Check out some professional details about me ",
      bg: "bg-buttonYellow",
      href: "/CV_Victoria_nweke.pdf",
      target: true,
    },
  ];

  const h1Styles =
    "text-blacky text-3xl smx:text-[2.68rem]  md:text-6xl  lgx:text-[5rem]  font-semibold text-center overflow-hidden";

  return (
    <section className="flex  flex-col">
      <div className="flex bg-backgroundpurple smx:px-2 pb-48  md:px-5 lg:py-16 ">
        <HeroSideDivs
          animate={{ scale: [0.97, 1, 0.97, 1, 0.97] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          title="Web Development"
          src={sparkle}
          src2={doubleLine}
          img={pencil}
        />

        <div className="w-full px-2  lg:w-[70%] ">
          <div className="smx:space-y-3 sm:space-y-0">
            <div className="flex flex-col flex-wrap smx:space-y-5 justify-center items-center pt-2 sm:space-y-0 sm:flex-row">
              <div className="flex flex-col-reverse  items-center sm:flex-row">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className={h1Styles}
                  >
                    Hello,
                  </motion.h1>
                </div>

                <motion.div
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="flex overflow-hidden mx-auto my-4 w-24 h-24 outline outline-1 bg-slate-500 rounded-full outline-blacky sm:m-3 sm:h-16 sm:w-16   lg:w-24 lg:h-24"
                >
                  <img
                    src="/profilepic1.png"
                    alt="profile picture"
                    className="w-full h-full object-cover "
                    fetchpriority="high"
                  />
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={h1Styles}
                >
                  {" "}
                  I'm Victoria,
                </motion.h1>
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className={`${h1Styles} leading-tight`}
            >
              a Frontend Developer.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0.1, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-4 text-blacky text-2xl text-center leading-relaxed md:pt-7"
          >
            I strive to create meaningful and engaging web experiences that
            foster a positive culture through thoughtful frontend development
            and design.
          </motion.p>
        </div>

        <HeroSideDivs
          animate={{ scale: [1, 0.97, 1, 0.97, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          title="Responsive Design"
          bgColor="bg-customPink"
          rotate="rotate-12"
          // justify="justify-center"
          tl=" -top-[1.1rem] left-[0.8rem]"
          br=" -top-[1rem] -right-[1.5rem]"
          size2="w-8 h-8"
          size1="w-7 h-7"
          src={hand}
          src2={tripleLine}
          img={spiral}
          flexCol="flex-col-reverse"
          imgSize="w-[5.5rem] h-[5.5rem]"
        />
      </div>
      <div className="relative flex flex-col">
        <div>
          <WaveMobile classname=" text-backgroundpurple w-full h-max lg:hidden" />
          <WaveDesktop classname="hidden text-backgroundpurple w-full  h-44  lg:flex" />
        </div>
        <div className=" flex px-3 pb-20 -mt-36  gap-10 flex-col smx:px-7 md:flex-row md:-mt-36 lg:-mt-48 lgx:px-24 ">
          {heroAboutdata.map((heroAboutItem, i) => (
            <HeroAbout key={i} heroAboutdata={heroAboutItem} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
