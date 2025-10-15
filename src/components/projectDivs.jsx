import Button from "./button";
import { motion } from "framer-motion";

export default function ProjectDivs({ title, description, src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ amount: 0.3, once: "true" }}
      className="flex flex-col-reverse gap-10  p-5 outline outline-1 outline-blacky rounded-3xl lg:flex-row md:p-14 lg:items-center"
    >
      <div className="w-full space-y-7 lg:w-[45%] ">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-lg ">{description}</p>
        <Button>View Project</Button>
      </div>
      <div className="w-full outline outline-1 outline-blacky rounded-2xl overflow-hidden lg:w-[55%]">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
}
