import { useState, useEffect } from "react";

export default function ScarcityCounter() {
  const [stock, setStock] = useState(20); // estoque inicial

  useEffect(() => {
    const interval = setInterval(() => {
      setStock(prev => (prev > 0 ? prev - 1 : 0));
    }, 60000); // diminui 1 unidade a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-red-600 text-white text-center py-2 font-bold">
      ⚠️ Estoque limitado! Apenas {stock} unidades restantes
    </div>
  );

}