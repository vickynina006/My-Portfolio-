import projectImg from "../assets/projectsimg.jpg";
import ProjectDivs from "./projectDivs";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section className="flex flex-col p-3 smx:p-7 md:p-14" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ amount: 0.6, once: "true" }}
        className="space-y-5 py-8 lgx:px-36"
      >
        <h1 className="text-center text-3xl font-semibold text-blacky md:font-medium md:text-5xl ">
          My selected works
        </h1>
        <p className="text-center text-2xl leading-relaxed">
          Driven by relentless attention to detail and a forward-thinking
          mindset, I build captivating{" "}
          <span className="font-semibold">
            websites, user-friendly products,
          </span>{" "}
          and immersive{" "}
          <span className="font-semibold"> digital experiences.</span>
        </p>
      </motion.div>
      <div className="space-y-10">
        <ProjectDivs
          title="Kora"
          description="Kora is an e-commerce website that specializes in selliing, caps, perfume amd interiors. Kora is dedidcated to providing, quality, durable and luxury products to its customers."
          src={projectImg}
        />
        <ProjectDivs
          title="Cyberize Website"
          description="Cyberize is a forward-thinking tech company specializing in innovative digital solutions and automation services that drive business growth. Its focus is on creating efficient and scalable technology, tailored to meet modern organizational challenges in a rapidly evolving digital landscape."
          src={projectImg}
        />
        <ProjectDivs
          title="Fylo's Landing Page"
          description="I re-created the frontend of Fylo's landing page because I was captivated by its stunning design and intuitive interface. Building the entire frontend was exciting. I explored modern web technologies in bringing a vibrant, user-friendly experience to life."
          src={projectImg}
        />
      </div>
    </section>
  );
}
