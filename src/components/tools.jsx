import { ToolsButton } from "./button";
import { motion } from "framer-motion";
import { SiCanva, SiTailwindcss, SiFramer } from "react-icons/si";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";

export default function Tools() {
  return (
    <section className="py-10 px-4" id="tools">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center   lg:px-36 lgx:px-56 gap-3 "
      >
        <h1 className="text-2xl font-bold md:text-4xl lg:font-semibold">
          My Toolbox
        </h1>
        <p className="leading-relaxed text-center text-2xl">
          I work with a versatile set of technologies to create interactive,
          responsive, and user-friendly web experiences. From styling and
          functionality efficient development. Each tool plays a role in
          bringing ideas to life seamlessly.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 1, once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 p-3 w-full my-20 mx-auto gap-4 rounded-3xl outline outline-1 outline-blacky md:grid-cols-3  md:w-[70%] lgx:w-[60%] lg:grid-cols-5 "
      >
        <ToolsButton title="React" Icon={FaReact} />
        <ToolsButton title="Html" Icon={FaHtml5} />
        <ToolsButton title="CSS" Icon={FaCss3Alt} />
        <ToolsButton title="Git" Icon={FaGitAlt} />
        <ToolsButton title="Tailwind CSS" Icon={SiTailwindcss} />
        <ToolsButton title="JavaScript" Icon={FaJs} />
        <ToolsButton title="GitHub" Icon={FaGithub} />
        <ToolsButton title="WordPress" Icon={FaWordpress} />
        <ToolsButton title="Canva" Icon={SiCanva} />
        <ToolsButton title="Framer-motion" Icon={SiFramer} />
      </motion.div>
    </section>
  );
}
