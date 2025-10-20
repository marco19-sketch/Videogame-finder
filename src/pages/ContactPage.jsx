import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div
      className="min-h-1/2 bg-gradient-to-b from-gray-900 via-gray-800
     to-black flex flex-col items-center py-8 px-8 text-white ">
      <h1 className="text-2xl text-cyan-400 font-bold">
        Contacts & social media
      </h1>
      {/* Social */}
      <div className="mb-4">
        <div className="flex flex-col  space-y-4  space-x-4 mt-3">
          <a
            href="https://x.com/brusc27655"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-cyan-400 flex gap-4 items-center">
            <FaXTwitter />
            x.com/brusc27655
          </a>
          <a
            href="https://facebook.com/marco.brusca"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Facebook"
            className="hover:text-cyan-400 flex gap-4 items-center">
            <FaFacebookF /> facebook.com/marco.brusca
          </a>
          <a
            href="https://github.com/marco19-sketch"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-cyan-400 flex gap-4 items-center">
            <FaGithub />
            github.com/marco19-sketch
          </a>
          <a
            href="https://https://www.linkedin.com/in/marco-brusca-29a36617b/"
            rel="noopener noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 flex gap-4 items-center">
            <FaLinkedinIn />
            linkedin.com/in/marco-brusca-29a36617b
          </a>
          <a
            href="https://www.freecodecamp.org/marco19_70"
            rel="noreferrer noopener"
            target="_blank"
            className="flex gap-4 items-center hover:text-cyan-400">
            <FaFreeCodeCamp />
            freecodecamp.org/marco19_70
          </a>
        </div>
        <a
          href="mailto:marco19_70@hotmail.it"
          className="hover:text-cyan-400 flex gap-4 items-center mt-4">
           <IoMail  />
         marco19_70@hotmail.it
        </a>
      </div>
    </div>
  );
}
