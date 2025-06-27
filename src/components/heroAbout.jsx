import arrowIcon from "../assets/arrow-icon.svg";

export default function HeroAbout({
  src,
  title,
  description,
  bg = "bg-buttonBlue",
}) {
  return (
    <div className="flex flex-col justify-center gap-4 items-center rounded-2xl w-full p-8 outline outline-1 outline-blacky bg-white md:w-1/3">
      <img src={src} alt="" className="w-20 h-16" />
      <h1 className="text-[1.3rem] font-medium">{title}</h1>
      <p className="text-center text-[1.1rem]">{description}</p>
      <a
        href=""
        className={`px-3.5 py-2.5 rounded-full ${bg} outline outline-1 outline-blacky`}
      >
        <img src={arrowIcon} alt="" />
      </a>
    </div>
  );
}
