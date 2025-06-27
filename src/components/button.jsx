export default function Button({ href, children, bg }) {
  return (
    <a
      href={href}
      className={`cursor-pointer inline-flex  py-3.5 px-5 rounded-lg font-medium  outline outline-1 outline-blacky ${bg} shadow-buttonshadow2 hover:bg-slate-100`}
    >
      {children}
    </a>
  );
}

export function ToolsButton({ icon, title }) {
  return (
    <button className="flex justify-center items-center py-2 rounded-lg shadow-buttonshadow2 outline outline-1 gap-1.5 outline-blacky">
      <i className={`text-sm ${icon} md:text-xl`} />
      <h1 className=" text-sm md:text-lg">{title}</h1>
    </button>
  );
}
