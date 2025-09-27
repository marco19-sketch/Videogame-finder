Got it 👍 You’re talking about AnimatePresence from Framer Motion.

AnimatePresence is a wrapper component that enables exit animations when components are removed from the React tree. It has a handful of props (attributes) you can use:


🔹 AnimatePresence Props
Prop	Type	Default	Description
children	ReactNode	—	The elements you want to animate in/out.
mode	"sync" | "popLayout" | "wait"	"sync"	Controls how multiple components animate when entering and exiting.
- "sync" → enter + exit happen together
- "popLayout" → exiting items finish before new ones are added
- "wait" → new items wait until all exiting ones are done
initial	true | false	true	Whether to play the initial animation on the first mount. If false, components appear instantly without animating in.
onExitComplete	() => void	—	Callback that fires when all exiting animations are complete.
presenceAffectsLayout	true | false	true	If false, exiting components are removed instantly from the layout flow (no space reservation during exit). Useful if you want smoother layout transitions.
🔹 Example usage
import { AnimatePresence, motion } from "framer-motion";

function Example({ isVisible }) {
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => console.log("Exit animations done")}
    >
      {isVisible && (
        <motion.div
          key="box"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          Hello world
        </motion.div>
      )}
    </AnimatePresence>
  );
}


👉 So the main attributes you’ll usually use are:

mode (controls enter/exit order)

initial (decide if first render should animate)

onExitComplete (trigger something after exit animations)

Do you want me to also show you the difference between mode="sync", "wait", and "popLayout" with a quick example?