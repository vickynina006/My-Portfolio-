import arrow2 from "../assets/arrow2-icon.svg";
import { motion } from "framer-motion";
export default function AboutDIv({ img, title1, title2 }) {
  return (
    <div className="space-y-4 w-full font-semibold text-lg lg:w-[50%]">
      <SpanBar title={title1} />
      <SpanBar title={title2} />
    </div>
  );
}

export function SpanBar({ title }) {
  return (
    <div className="flex item-center">
      <img src={arrow2} alt="" /> <span className="ml-2">{title}</span>
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
      className="flex  gap-2 py-3 px-6 rounded-full font-medium text-2xl bg-white outline outline-blacky outline-1"
    >
      <img src={img} alt="" />
      <span>{title}</span>
    </motion.div>
  );
}
