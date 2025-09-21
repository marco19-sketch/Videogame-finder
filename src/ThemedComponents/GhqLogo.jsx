// Logo.jsx
export default function Logo({
  className = "",
  textClass = "",
  style = {},
  textStyle = {},
}) {
  return (
    <div
      className={`
        relative w-20 py-4 h-12 pb-4 bg-gradient-to-tr from-cyan-400/40 via-slate-800/60 to-black       
        border-2 rounded-full shadow-[0_0_20px_cyan] 
        hover:shadow-[0_0_40px_cyan] hover:scale-110
        transition-all duration-300
        ${className}
      `}
      style={style}>
      <p
        className={`-mt-4 pt-0 text-cyan-400 text-center font-light text-2xl ${textClass}`}
        style={textStyle}>
        G H
      </p>
      <p
        className={`
          text-cyan-400 absolute left-1/2 -translate-x-1/2 top-1/5 font-light text-2xl
          ${textClass}
        `}
        style={textStyle}>
        Q
      </p>
    </div>
  );
}
