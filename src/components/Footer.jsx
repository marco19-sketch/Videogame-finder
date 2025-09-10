import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="w-full h-24 bg-amber-500 flex justify-center items-center">
      <a href="mailto:marco19_70@hotmail.it" target='_blank' className="text-base text-black flex">
        Contact me
        <FaEnvelope className='mt-1.5 ml-1'/>
      </a>
    </div>
  );
}
