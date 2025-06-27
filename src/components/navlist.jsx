export default function Navlist({ href, title }) {
  return (
    <li>
      <a href={href} className="hover:text-slate-500">
        {title}
      </a>
    </li>
  );
}

export function Navdot() {
  return (
    <li>
      <button className="flex h-1 w-1 rounded-full bg-black"></button>
    </li>
  );
}

export function Navicon({ href, icon }) {
  return (
    <a
      href={href}
      className="flex cursor-pointer px-2 py-[0.5rem] outline rounded-lg outline-1 outline-blacky shadow-buttonshadow hover:bg-slate-100"
    >
      <i className={`${icon} text-[1.2rem] `}></i>
    </a>
  );
}
