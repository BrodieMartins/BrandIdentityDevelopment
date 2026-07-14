import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

/**
 * Primitives d'animation au scroll — révélations subtiles, une seule fois,
 * désactivées si l'utilisateur préfère réduire les animations.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function useRevealVariants(offsetY = 24): Variants {
  const reduced = useReducedMotion();
  return {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: offsetY },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: EASE },
    },
  };
}

interface RevealProps extends ComponentProps<typeof motion.div> {
  children: ReactNode;
  /** Décalage vertical initial en px. */
  offsetY?: number;
  /** Délai en secondes. */
  delay?: number;
}

export function Reveal({ children, offsetY = 24, delay = 0, ...rest }: RevealProps) {
  const variants = useRevealVariants(offsetY);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Conteneur qui révèle ses enfants en cascade. */
export function Stagger({
  children,
  gap = 0.09,
  ...rest
}: { children: ReactNode; gap?: number } & ComponentProps<typeof motion.div>) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: gap } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={container}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  offsetY = 20,
  ...rest
}: { children: ReactNode; offsetY?: number } & ComponentProps<typeof motion.div>) {
  const variants = useRevealVariants(offsetY);
  return (
    <motion.div variants={variants} {...rest}>
      {children}
    </motion.div>
  );
}
