import Lenis from "lenis";

/**
 * Défilement doux via Lenis, avec repli natif :
 * - désactivé si l'utilisateur préfère réduire les animations ;
 * - tous les défilements programmés (ancres, retour en haut) passent par
 *   ici pour ne jamais entrer en conflit avec la boucle Lenis.
 */

let lenis: Lenis | null = null;

/* Lenis tient déjà compte du scroll-margin-top des sections (scroll-mt-20,
   calé sur le header fixe) : aucun offset supplémentaire à appliquer. */

export function initSmoothScroll(): () => void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return () => {};
  }
  lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 });
  let rafId = requestAnimationFrame(function loop(time) {
    lenis?.raf(time);
    rafId = requestAnimationFrame(loop);
  });
  return () => {
    cancelAnimationFrame(rafId);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToAnchor(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el);
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function scrollToTop(immediate = false) {
  if (lenis) {
    lenis.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "auto" : "smooth" });
  }
}
