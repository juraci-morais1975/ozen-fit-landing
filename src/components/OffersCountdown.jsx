<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function OffersCountdown() {

  const [stock, setStock] = useState(47);

  useEffect(() => {

    const timer = setInterval(() => {
      setStock((prev) => prev > 5 ? prev - 1 : prev);
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (
    <p className="text-red-600 font-bold text-sm mt-2">
      ⚠ Restam apenas {stock} unidades em estoque
    </p>
  );
=======
import { useEffect, useState } from "react";

export default function OffersCountdown() {

  const [stock, setStock] = useState(47);

  useEffect(() => {

    const timer = setInterval(() => {
      setStock((prev) => prev > 5 ? prev - 1 : prev);
    }, 5000);

    return () => clearInterval(timer);

  }, []);

  return (
    <p className="text-red-600 font-bold text-sm mt-2">
      ⚠ Restam apenas {stock} unidades em estoque
    </p>
  );
>>>>>>> b209dbbab8d96200a6aff07cce35df8270a48fde
}