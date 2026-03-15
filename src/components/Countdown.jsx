import { useEffect, useState } from "react";

export default function Countdown() {

  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev > 0 ? prev - 1 : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600 text-white text-center py-6 rounded-xl mb-10">

      <p className="font-bold text-lg mb-3">
        OFERTA TERMINA EM
      </p>

      <div className="flex justify-center gap-4 text-2xl font-bold">

        <div className="bg-black px-4 py-2 rounded">
          {hours.toString().padStart(2,"0")}
        </div>

        <div className="bg-black px-4 py-2 rounded">
          {minutes.toString().padStart(2,"0")}
        </div>

        <div className="bg-black px-4 py-2 rounded">
          {seconds.toString().padStart(2,"0")}
        </div>

      </div>

    </div>
  );

}