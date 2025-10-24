import arrow2 from "../assets/arrow2-icon.svg";
import { motion } from "framer-motion";
export default function AboutDIv({ img, title1, title2 }) {
  return (
    <div className="grid grid-cols-1 w-full gap-5 font-semibold text-lg md:grid-cols-2">
      <SpanBar title={title1} />
      <SpanBar title={title2} />
    </div>
  );
}

export function SpanBar({ title }) {
  return (
    <div className="flex item-center">
      <img src={arrow2} alt="" className="w-5 h-5" />{" "}
      <span className="ml-2">{title}</span>
    </div>
  );
}

export function AboutButton({ title, img, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.3, once: "true" }}
      transition={{ duration: 0.4, delay: i * 0.15 }}
      className="flex items-center gap-2 py-3 px-2 smx:px-6 rounded-full font-medium smx:text-[1.45rem] bg-white outline outline-blacky outline-1"
    >
      <img src={img} alt="" className="w-6 h-6" />
      <span>{title}</span>
    </motion.div>
  );
}
