import { ToolsButton } from "./button";
import { motion } from "framer-motion";
import {
  SiLinux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiGithub,
  SiTerraform,
  SiKubernetes,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaJs,
  FaGithub,
  FaDocker,
  FaAws,
} from "react-icons/fa";

export default function Tools() {
  const tools = [
    { title: "React", Icon: FaReact },
    { title: "Html", Icon: FaHtml5 },
    { title: "CSS", Icon: FaCss3Alt },
    { title: "Git", Icon: FaGitAlt },
    {title: "Next.js", Icon: SiNextdotjs},
    {title: "TypeScript", Icon: SiTypescript},
    { title: "Tailwind CSS", Icon: SiTailwindcss },
    { title: "JavaScript", Icon: FaJs },
    { title: "GitHub", Icon: FaGithub },
    { title: "Docker", Icon: FaDocker },
    { title: "Linux", Icon: SiLinux },
    { title: "Framer-motion", Icon: SiFramer },
    { title: "Redux", Icon: SiRedux },
    { title: "Node.js", Icon: SiNodedotjs },
    { title: "Express.js", Icon: SiExpress },
    { title: "MongoDB", Icon: SiMongodb },
    {title: "GraphQL", Icon: SiGraphql},
    { title: "Github actions", Icon: SiGithub },
    { title: "Terraform", Icon: SiTerraform },
    // { title: "AWS", Icon: FaAws },
    { title: "Kubernetes", Icon: SiKubernetes },

  ];
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
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ amount: 1, once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 p-3 w-full my-20 mx-auto gap-4 rounded-3xl outline outline-1 outline-blacky md:grid-cols-3  md:w-[70%] lgx:w-[60%] lg:grid-cols-5 "
      >
        {tools.map((tool) => (
          <ToolsButton key={tool.title} title={tool.title} Icon={tool.Icon} />
        ))}
      </motion.div>
    </section>
  );
}

