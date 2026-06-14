"use client";

import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function WhiteThemeBackdrop() {
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.3);
  const pointerXSpring = useSpring(pointerX, { stiffness: 90, damping: 18, mass: 0.6 });
  const pointerYSpring = useSpring(pointerY, { stiffness: 90, damping: 18, mass: 0.6 });
  const { scrollYProgress } = useScroll();

  const orbOneY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const orbTwoY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const orbThreeY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const meshY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const haloX = useTransform(pointerXSpring, [0, 1], ["18%", "82%"]);
  const haloY = useTransform(pointerYSpring, [0, 1], ["12%", "68%"]);
  const haloBackground = useMotionTemplate`radial-gradient(circle at ${haloX} ${haloY}, rgba(59, 130, 246, 0.12), transparent 0 32%), radial-gradient(circle at calc(${haloX} - 12%) calc(${haloY} + 18%), rgba(249, 115, 22, 0.1), transparent 0 26%)`;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    const handlePointerMove = (event: PointerEvent) => {
      if (mediaQuery.matches) {
        return;
      }

      pointerX.set(event.clientX / window.innerWidth);
      pointerY.set(event.clientY / window.innerHeight);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [pointerX, pointerY]);

  return (
    <div aria-hidden="true" className="white-theme-backdrop">
      <motion.div className="white-theme-backdrop__mesh" style={{ y: meshY }} />
      <motion.div className="white-theme-backdrop__halo" style={{ backgroundImage: haloBackground }} />
      <motion.div className="white-theme-backdrop__orb white-theme-backdrop__orb--one" style={{ y: orbOneY }} />
      <motion.div className="white-theme-backdrop__orb white-theme-backdrop__orb--two" style={{ y: orbTwoY }} />
      <motion.div className="white-theme-backdrop__orb white-theme-backdrop__orb--three" style={{ y: orbThreeY }} />
    </div>
  );
}