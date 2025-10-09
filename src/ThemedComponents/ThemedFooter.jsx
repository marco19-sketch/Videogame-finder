import GhqLogo from "./GhqLogo";
import { NavLink } from "react-router-dom";
import { IoMail } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFreeCodeCamp } from "react-icons/fa";
import { scrollTo } from "../lib/scrollTo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-cyan-400 py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="md:flex md:flex-col md:justify-center md:items-center mb-4">
          <h2 className="text-2xl font-bold text-cyan-400">Game Quest Hub</h2>
          <p className="mt-3 text-sm text-gray-400">
            Built with ❤️ using React + Tailwind.
          </p>
          <NavLink to="/" className="inline-flex">
            {" "}
            <GhqLogo
              className="mt-4 md:mt-6"
              style={{ borderRadius: "50%" }}
              textClass=" text-1xl text-center"
            />
          </NavLink>
        </div>

        {/* Social */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a
              href="https://x.com/brusc27655"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-cyan-400">
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/marco.brusc"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Facebook"
              className="hover:text-cyan-400">
              <FaFacebookF />
            </a>
            <a
              href="https://github.com/marco19-sketch"
              rel="noreferrer noopener"
              target="_blank"
              aria-label="GitHub"
              className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a
              href="https://https://www.linkedin.com/in/marco-brusca-29a36617b/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn"
              className="hover:text-cyan-400">
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.freecodecamp.org/marco19_70"
              rel="noreferrer noopener"
              target="_blank">
              <FaFreeCodeCamp />
            </a>
          </div>
          <a
            href="mailto:marco19_70@hotmail.it"
            className="hover:text-cyan-400 font-bold flex gap-2.5 items-center mt-4">
            Contact us: <IoMail className="mt-0.5" />
          </a>
        </div>
        <div className="text-sm flex flex-wrap gap-0.5 md:justify-end sm:text-right">
          <p>
            Sound Effect by:{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="http://bit.ly/46CZdO7">
              freesound_community,
            </a>{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="http://bit.ly/46Cb2Ei">
              Jurij,
            </a>{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="http://bit.ly/4o2lN8z">
              Existential Taco
            </a>{" "}
            from{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="http://bit.ly/47aRFCl">
              Pixabay;
            </a>
          </p>
          <p>
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://freesound.org/people/Wdomino/sounds/508575/">
              BoulderReset.wav
            </a>{" "}
            by{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://freesound.org/people/Wdomino/">
              Wdomino
            </a>{" "}
            | License:{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="http://creativecommons.org/publicdomain/zero/1.0/">
              Creative Commons 0;
            </a>
          </p>
          <p>
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://freesound.org/people/BryanSaraiva/sounds/820351/">
              Typewriter Key Press 04
            </a>{" "}
            by{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://freesound.org/people/BryanSaraiva/">
              BryanSaraiva
            </a>{" "}
            | License:{" "}
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://creativecommons.org/licenses/by/4.0/">
              Attribution 4.0;
            </a>
          </p>
          <p>
            <a
              className="underline underline-offset-2 text-white"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.freepik.com/free-vector/blue-circle-with-white-user_145857007.htm">
              Image by juicy_fish on Freepik
            </a>
          </p>
        </div>
      </div>
      {/* legals */}
      <div
        className="flex flex-col sm:flex-row gap-2 mt-4  text-sm sm:justify-center"
        onClick={() => scrollTo(0, 500)}>
        <NavLink to="/privacy">Privacy policy</NavLink>
        <NavLink to="/terms">Terms of service</NavLink>
        <NavLink to="/cookie">Cookies policy</NavLink>
        <NavLink to="/impressum">Impressum</NavLink>
        <NavLink to="/accessibility">Accessibility policy</NavLink>
      </div>
      <p className="text-sm text-gray-400 mt-4">
        As an Amazon Associate, GameQuest earns from qualifying purchases.
      </p>

      <div className="border-t border-gray-700 mt-5 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Game Quest Hub. All rights reserved.
      </div>
    </footer>
  );
}
