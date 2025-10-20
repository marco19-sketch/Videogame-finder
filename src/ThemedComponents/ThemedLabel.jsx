export default function ThemedLabel({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="
        block 
        text-sm font-semibold 
        text-cyan-400 
        mb-2 
        tracking-wide 
        hover:text-cyan-300 
        transition-colors
      ">
      {children}
    </label>
  );
}
