import { motion } from "framer-motion";

export default function Button({ href, children, bg, ...props }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 500 }}
      href={href}
      {...props}
      className={`cursor-pointer inline-flex  py-3 px-4 rounded-lg font-medium  outline outline-1 outline-blacky ${bg} shadow-buttonshadow2 hover:bg-slate-100`}
    >
      {children}
    </motion.a>
  );
}

export function ToolsButton({ Icon, title }) {
  return (
    <button className="flex justify-center items-center px-1 py-2 rounded-lg shadow-buttonshadow2 outline outline-1 gap-1.5 outline-blacky">
      <Icon className="text-sm md:text-[1.1rem]" />
      <h1 className=" text-sm md:text-[0.9rem]">{title}</h1>
    </button>
  );
}
