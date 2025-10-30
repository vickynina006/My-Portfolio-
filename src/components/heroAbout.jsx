import { motion } from "framer-motion";
import arrowIcon from "../assets/arrow-icon.svg";

export default function HeroAbout({ heroAboutdata, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 0.5, delay: i * 0.2 }}
      className="flex flex-col justify-center gap-4 items-center rounded-2xl w-full p-7 outline outline-1 outline-blacky bg-white md:w-1/3"
    >
      <img src={heroAboutdata.src} alt="" className="w-20 h-16" />
      <h1 className="text-[1.3rem] font-medium">{heroAboutdata.title}</h1>
      <p className="text-center text-[1.1rem] md:hidden lg:block">
        {heroAboutdata.description}
      </p>
      <motion.a
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 600 }}
        href={heroAboutdata.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-3.5 py-2.5 rounded-full ${heroAboutdata.bg} outline outline-1 outline-blacky`}
      >
        <img src={arrowIcon} alt="arrow" />
      </motion.a>
    </motion.div>
  );
}
