export default function CustomButton({ text }) {
  return (
    <div className="relative flex flex-col">
      <div className="relative flex">
        <div
          className="absolute border-t-2 w-2.5 h-2.5 -rotate-45"
          style={{ top: 1, left: - 4 }}
        />
        <div
          className="absolute border-t-2 w-2.5 -rotate-45"
          style={{ top: 65, left: -6 }}
        />
        <div
          className="absolute border-l-2 w-2.5 h-16"
          style={{ top: 6, left: -5 }}
        />
        <div className="w-3xs h-16 border-2">
          <p className="text-5xl text-cyan-500 text-center">{text}</p>
        </div>
      </div>
      <div className='absolute w-3xs border-t-2'
      style={{ top: 69, left: -5 }}/>
      <div className='absolute w-3.5 h-2.5 border-r-2 rotate-45'
      style={{ top: 57.5, left: 240.5 }}/>
      
    </div>
  );
}
