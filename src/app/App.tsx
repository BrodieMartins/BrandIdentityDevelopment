import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Header } from "./site/components/Header";
import { Footer } from "./site/components/Footer";
import { HomePage } from "./site/pages/HomePage";
import { ServicePage } from "./site/pages/ServicePage";

/** Remonte en haut à chaque navigation, ou défile vers l'ancre demandée. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // L'ancre peut appartenir à une page qui vient d'être montée.
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <div className="bg-kraft min-h-screen text-navy-950 antialiased">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
