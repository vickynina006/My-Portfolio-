export default function HeroSideDivs({
  title,
  bgColor = "bg-customBlue",
  rotate = "-rotate-12",
  src,
  src2,
  br = " -bottom-[0.8rem] -right-[0.95rem]",
  tl = " -top-[1.58rem] left-0",
  size1 = "w-9 h-9",
  size2 = "w-7 h-7",
  img,
  flexCol = "flex-col",
  imgSize = "w-[5.3rem] h-[5.3rem]",
}) {
  return (
    <div className={`hidden py-20 gap-28 ${flexCol}  w-[15%] lg:flex`}>
      <div className={`flex relative justify-center `}>
        <div
          className={`relative inline-block px-4 py-2.5  text-[0.7rem] font-semibold rounded-full outline outline-1 outline-blacky transform ${rotate} ${bgColor} lgx:text-[0.95rem]`}
        >
          <img src={src} alt="" className={`absolute ${size1} z-10 ${tl}`} />
          {title}
          <img src={src2} alt="" className={`${size2} flex absolute ${br}`} />
        </div>
      </div>
      <div className={`flex justify-center`}>
        <img src={img} alt="" className={`${imgSize}`} />
      </div>
    </div>
  );
}
