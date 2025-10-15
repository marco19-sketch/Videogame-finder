// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { scrollTo } from "../lib/scrollTo";

export default function AnimateWrapper({
  children,
  results,
  isMobile,
  animationLeft,
  page,
}) {
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (results.length > 0 && isMobile) {
          const delay = 500;
          

          scrollTo(animationLeft ? 1600 : 0, delay);
         
        }
      }}>
      <motion.div
        key={results[0]?.id || page}
        initial={{
          opacity: 0,
          ...(isMobile
            ? { y: animationLeft ? 100 : -100 }
            : { x: animationLeft ? 100 : -100 }),
        }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{
          opacity: 0,
          ...(isMobile
            ? { y: animationLeft ? -100 : 100 }
            : { x: animationLeft ? -100 : 100 }),
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`flex ${isMobile ? "flex-col items-center " : ""}`}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
