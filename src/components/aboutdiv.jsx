import arrow2 from "../assets/arrow2-icon.svg";
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

export function AboutButton({ title, img }) {
  return (
    <div className="flex  gap-2 py-3 px-6 rounded-full font-medium text-2xl bg-white outline outline-blacky outline-1">
      <img src={img} alt="" />
      <span>{title}</span>
    </div>
  );
}
