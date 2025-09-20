export default function ThemedButton({
  children,
  onClick,
  disabled,
  className = "",
  style = {},
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-52
        cursor-pointer
        px-6 py-3 
        rounded-xl 
        font-semibold 
        bg-gradient-to-r from-cyan-500 to-blue-600 
        text-white
        shadow-md shadow-cyan-500/30
        transition-all duration-300
        hover:from-cyan-400 hover:to-blue-500 
        hover:shadow-cyan-400/50
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
          ${className}   //* 👈 allow overrides */
      `}
      style={style} //*👈 inline styles will now apply
    >
      {children}
    </button>
  );
}
