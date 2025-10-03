import { useState, useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { createPortal } from 'react-dom'; // to place the modal outside the layout stack, so it can be always on top of everything
import { FaPowerOff } from "react-icons/fa6";
import addBlipOffSound from '../lib/addBlipOffSound';

export default function Modal({ onClose, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const closeButtonRef = useRef(null);

  // Attiva animazione e focus
  useEffect(() => {
    setIsVisible(true);
    const timeout = setTimeout(() => closeButtonRef.current?.focus(), 300);
    return () => clearTimeout(timeout);
  }, []);

  // Chiudi su ESC
  useEffect(() => {
    const handleKeydown = e => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [onClose]);

  return createPortal(
    <FocusTrap>
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
        onClick={() => {onClose();
          addBlipOffSound();
        }}>
        {/* <AnimatePresence mode="wait"> */}
          <motion.div
            key={children}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full w-full flex justify-center items-center">
            <div
              className={`relative w-full h-auto max-w-3xl  rounded-2xl bg-gray-900 
                shadow-xl transform transition-all duration-300 ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              onClick={e => e.stopPropagation()}>
              <button
                ref={closeButtonRef}
                onClick={() => {onClose();
                  addBlipOffSound();
                }}
                className="absolute top-3 right-3 text-gray-400 hover:text-white 
                text-2xl focus:outline-none cursor-pointer"
                aria-label="Close modal">
                {/* &times; */}
                <FaPowerOff className='text-cyan-300 hover:text-red-700 transition-colors duration-300'/>
              </button>
              {children}
            </div>
          </motion.div>
        {/* </AnimatePresence> */}
      </div>
     
    </FocusTrap>,
     document.body  //{/*🔥 ensures it's rendered outside your NavBar/header  stacking context*/}
    
  ); 
}
