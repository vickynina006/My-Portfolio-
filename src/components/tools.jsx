import { ToolsButton } from "./button";

export default function Tools() {
  return (
    <section className="py-10 px-4">
      <div className="flex flex-col items-center   lg:px-36 lgx:px-56 gap-3 ">
        <h1 className="text-2xl font-bold md:text-4xl lg:font-semibold">
          My Toolbox
        </h1>
        <p className="leading-relaxed text-center text-2xl">
          I work with a versatile set of technologies to create interactive,
          responsive, and user-friendly web experiences. From styling and
          functionality to version control and efficient development. Each tool
          plays a role in bringing ideas to life seamlessly.
        </p>
      </div>
      <div className="grid grid-cols-2 p-3 w-full my-20 mx-auto gap-4 rounded-3xl outline outline-1 outline-blacky md:grid-cols-3  md:w-[70%] lgx:w-[60%] lg:grid-cols-5 ">
        <ToolsButton title="React" icon="fab fa-react" />
        <ToolsButton title="Html" icon="fab fa-html5" />
        <ToolsButton title="CSS" icon="fab fa-css3-alt" />
        <ToolsButton title="Git" icon="fab fa-git-alt" />
        <ToolsButton title="Tailwind CSS" />
        <ToolsButton title="JavaScript" icon="fab fa-js" />
        <ToolsButton title="GitHub" icon="fab fa-github" />
        <ToolsButton title="WordPress" icon="fab fa-wordpress" />
        <ToolsButton title="Canva" icon="fas fa-palette" />
      </div>
    </section>
  );
}
