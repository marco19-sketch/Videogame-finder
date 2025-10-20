export default function ThemedButton({
  children,
  onClick,
  disabled,
  className = "",
  style = {},
}) {
  const baseClasses = `
    cursor-pointer 
    rounded-xl 
    text-white
    font-semibold
    bg-gradient-to-r from-cyan-500 to-blue-600
     hover:from-cyan-400 hover:to-blue-500
    hover:shadow-cyan-400/50
     active:scale-95
    transition-all duration-300
    active:scale-95 
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
      style={style} //*👈 inline styles will now apply
    >
      {children}
    </button>
  );
}
