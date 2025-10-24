import { FaGithub } from "react-icons/fa";
import Button from "./button";
import { motion } from "framer-motion";

export default function ProjectDivs({ title, description, src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3, once: "true" }}
      className="flex flex-col-reverse gap-10  p-4 outline outline-1 outline-blacky rounded-3xl lg:flex-row md:p-10 lg:p-14 lg:gap-16 lg:items-center"
    >
      <div className="w-full space-y-7 lg:w-[47%] ">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-lg ">{description}</p>
        <div className="flex  items-center justify-between">
          <Button href="https://kora-lyart.vercel.app/">View Demo</Button>
          <FaGithub className="text-3xl" title="view code on github" />
        </div>
      </div>
      <div className="w-full outline outline-1 outline-blacky rounded-2xl overflow-hidden aspect-[16/12] lg:w-[53%]">
        <img src={src} alt="" className="w-full h-full " />
      </div>
    </motion.div>
  );
}
