import Button from "./button";
import { WaveDesktopTop, WaveMobileTop } from "./waveSvg";

import heartIcon from "../assets/heart-icon.svg";
import lighteningIcon from "../assets/lightening-icon.svg";
import star1 from "../assets/star1.svg";
import star2 from "../assets/star2.svg";
import star3 from "../assets/star3.svg";
import WaveMobile, { WaveDesktop } from "./waveSvg";
import { motion } from "framer-motion";
import AboutDIv, { AboutButton } from "./aboutdiv";

export default function AboutSection() {
  const aboutButton = [
    {
      title: "Frontend Development",
      img: heartIcon,
    },
    {
      title: "Performance Optimization",
      img: star1,
    },
    {
      title: "Responsive Designs",
      img: star2,
    },
    {
      title: "Digital Solutions",
      img: lighteningIcon,
    },
    {
      title: "Backend Development",
      img: star3,
    },
    {
      title: "SEO & Accessibility",
      img: star1,
    },
  ];
  return (
    <section className="py-24 " id="about">
      <WaveMobileTop classname=" text-backgroundpurple w-full h-max  lg:hidden " />
      <WaveDesktopTop classname="hidden text-backgroundpurple w-full  h-max lg:flex " />

      <div className="px-3 smx:px-7 py-16 bg-backgroundpurple md:px-14 md:py-20">
        <div className="outline outline-1 outline-blacky rounded-3xl flex flex-col py-10 px-3 smx:px-4 text-textblack bg-backgroundpurple gap-10 md:px-10 lgx:gap-14 md:py-14 lg:px-14 lg:py-20 lgx:flex-row lgx:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.5, once: true }}
            transition={{ duration: 1 }}
            className="w-full my-auto space-y-5  lgx:w-[55%]  "
          >
            <h1 className="font-medium text-2xl smx:text-4xl md:text-[3rem] ">
              More about me
            </h1>
            <p className="text-lg">
              I am a Software Engineer with deep roots in frontend development. I enjoy crafting solid, scalable products that solve real problems and deliver great user experiences. My experience also extends to backend development, where I build and integrate the systems that bring complete products together. I am particularly interested in making software reliable and efficient.
            </p>
            <p className="text-lg">
              I hold a First-Class B.Sc. (Honours) degree and have always been
              driven by curiosity and creativity. I love building, and learning
              along the way. I am deeply passionate about growth, both as a
              developer and as a person.
            </p>
          </motion.div>
          <div className="w-full space-y-4 p-5 lgx:w-[45%]">
            <div className=" pb-5 space-y-6  ">
              <AboutDIv
                title1="Innovative Thinking"
                title2="Attention to Detail"
              />
              <AboutDIv title1="Rapid Solutions" title2="Critical Thinking" />
              <AboutDIv
                title1="Quality Focused"
                title2="Collaborative Mindset"
              />
            </div>
            <Button href="#more" bg="bg-white">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div
        id="more"
        className="bg-backgroundpurple text-textblack flex flex-col items-center px-5 py-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.5, once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center  lg:px-28 lgx:px-48 gap-3 "
        >
          <h1 className="text-2xl font-bold md:text-4xl lg:font-semibold">
            My capabilities
          </h1>
          <p className="leading-relaxed text-center text-2xl">
            The services I offer are meticulously crafted and tailored to cater
            specifically to your unique needs and requirements.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-8 py-10 justify-center lgx:px-16"
          id="services"
        >
          {aboutButton.map((aboutB, i) => (
            <AboutButton
              key={aboutB.title}
              title={aboutB.title}
              img={aboutB.img}
              i={i}
            />
          ))}
        </motion.div>
      </div>
      <WaveMobile classname=" text-backgroundpurple w-full h-max lg:hidden" />
      <WaveDesktop classname="hidden text-backgroundpurple w-full h-max  lg:flex" />
    </section>
  );
}
