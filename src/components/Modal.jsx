import { useState, useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";

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

  return (
    <FocusTrap>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        onClick={onClose}>
        <div
          className={`relative w-full h-auto max-w-3xl p-0 rounded-2xl bg-gray-900 shadow-xl transform transition-all duration-300 ${
            isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={e => e.stopPropagation()}>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl focus:outline-none"
            aria-label="Close modal">
            &times;
          </button>

          {children}
        </div>
      </div>
    </FocusTrap>
  );
}
