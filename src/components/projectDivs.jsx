import Button from "./button";

export default function ProjectDivs({ title, description, src }) {
  return (
    <div className="flex flex-col-reverse gap-10  p-5 outline outline-1 outline-blacky rounded-3xl lg:flex-row md:p-14 lg:items-center">
      <div className="w-full space-y-7 lg:w-[40%] ">
        <h1 className="text-3xl font-medium">{title}</h1>
        <p className="text-lg ">{description}</p>
        <Button>View Project</Button>
      </div>
      <div className="w-full outline outline-1 outline-blacky rounded-2xl overflow-hidden lg:w-[60%]">
        <img src={src} alt="" className="" />
      </div>
    </div>
  );
}
