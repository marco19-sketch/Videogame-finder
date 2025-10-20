export default function ThemedInput({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  className = ''
}) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value || ''}
      onChange={onChange}
      className={`
        w-full 
        px-4 py-2 
        rounded-lg 
        bg-gray-900 
        text-cyan-400 
        border border-cyan-500/60 
        focus:border-cyan-400 
        focus:ring-2 focus:ring-cyan-400 
        placeholder-gray-500 
        transition 
        outline-none
         ${className}   //* 👈 allow overrides */
      `}
    />
  );
}
