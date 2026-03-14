<<<<<<< HEAD
import { useState, useEffect } from "react";

export default function UrgencyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-0 w-full bg-red-600 text-white py-3 text-center font-bold z-40">
      ⚠️ Últimas unidades disponíveis - Garanta agora
      <a
        href="#oferta"
        className="ml-4 bg-white text-red-600 px-4 py-1 rounded font-bold"
      >
        Comprar
      </a>
    </div>
  );
=======
import { useState, useEffect } from "react";

export default function UrgencyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-20 left-0 w-full bg-red-600 text-white py-3 text-center font-bold z-40">
      ⚠️ Últimas unidades disponíveis - Garanta agora
      <a
        href="#oferta"
        className="ml-4 bg-white text-red-600 px-4 py-1 rounded font-bold"
      >
        Comprar
      </a>
    </div>
  );
>>>>>>> b209dbbab8d96200a6aff07cce35df8270a48fde
}