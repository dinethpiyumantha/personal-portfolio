import { GlobeWEBP, PuzzleBlockPNG, SkyWEBP, TextCircleSVG } from "@/assets";
import { motion } from "motion/react";
import BottomContainer from "./components/bottom-container";
import { useNavigate } from "react-router-dom";
import { ROUTE_PUZZLE } from "@/routes/paths";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-dvh bg-brand-primary-light overflow-hidden">
      <motion.div className="relative w-full h-full">
        <motion.img
          initial={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(-20deg)",
          }}
          animate={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(160deg)",
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 5,
          }}
          style={{ width: 660, height: 660, zIndex: 0, userSelect: 'none' }}
          src={SkyWEBP}
          className="z-0"
          alt="sky-circle-for-animation"
          draggable={false}
        />
        <motion.img
          initial={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(0deg)",
          }}
          animate={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(-180deg)",
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 5,
          }}
          style={{ width: 680, height: 680, zIndex: 1, userSelect: 'none' }}
          className="rounded-full"
          src={TextCircleSVG}
          alt="sky-circle-for-animation"
          draggable={false}
        />
        <motion.img
          initial={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(0deg)",
          }}
          animate={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) rotate(180deg)",
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 5,
          }}
          style={{ width: 317, height: 317, zIndex: 3, userSelect: 'none' }}
          className="rounded-full border-[11px] box-content"
          src={GlobeWEBP}
          alt="sky-circle-for-animation"
          draggable={false}
        />
        <motion.img
          initial={{
            position: "absolute",
            top: "21%",
            right: "16%",
            transform: "translate(-50%, -50%) rotate(57.72deg)",
          }}
          animate={{
            position: "absolute",
            top: "43%",
            right: "25%",
            transform: "translate(-50%, -50%) rotate(-60.24deg)",
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
            repeatDelay: 5,
          }}
          style={{ width: 144, height: 144, zIndex: 10, userSelect: 'none' }}
          src={PuzzleBlockPNG}
          className="cursor-pointer"
          alt="sky-circle-for-animation"
          onClick={() => navigate(ROUTE_PUZZLE)}
          draggable={false}
        />
        <BottomContainer></BottomContainer>
      </motion.div>
    </div>
  );
}
