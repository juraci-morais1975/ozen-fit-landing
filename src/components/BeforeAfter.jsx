import { useEffect, useState } from "react";

export default function BeforeAfter() {

const [count, setCount] = useState(3200);

useEffect(() => {


const timer = setInterval(() => {

  setCount(prev => {
    if(prev < 3742){
      return prev + 3
    }
    return prev
  })

},200)

return () => clearInterval(timer)


},[])

return (


<section className="bg-gray-100 py-16">

  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-3xl font-bold text-center mb-4">
      Resultados Reais de Clientes
    </h2>

    <p className="text-center text-green-600 font-bold mb-10">
      +{count} pessoas já tiveram resultados
    </p>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-white p-4 rounded-xl shadow text-center border-2 border-green-500">

        <img
          src="/resultado1.jpg"
          alt="resultado"
          className="rounded-lg mx-auto hover:scale-110 transition duration-500"
        />

        <p className="mt-3 text-lg font-bold text-green-600">
          -20kg
        </p>

        <p className="text-sm text-gray-600">
          Suellen – 2 meses
        </p>

      </div>


      <div className="bg-white p-4 rounded-xl shadow text-center border-2 border-green-500">

        <img
          src="/resultado4.jpg"
          alt="resultado"
          className="rounded-lg mx-auto hover:scale-110 transition duration-500"
        />

        <p className="mt-3 text-lg font-bold text-green-600">
          -14kg
        </p>

        <p className="text-sm text-gray-600">
          Varlei – 1 mês
        </p>

      </div>


      <div className="bg-white p-4 rounded-xl shadow text-center border-2 border-green-500">

        <img
          src="/resultado3.jpg"
          alt="resultado"
          className="rounded-lg mx-auto hover:scale-110 transition duration-500"
        />

        <p className="mt-3 text-lg font-bold text-green-600">
          -12kg
        </p>

        <p className="text-sm text-gray-600">
          Beatriz – 2 meses
        </p>

      </div>


      <div className="bg-white p-4 rounded-xl shadow text-center border-2 border-green-500">

        <img
          src="/resultado5.jpg"
          alt="resultado"
          className="rounded-lg mx-auto hover:scale-110 transition duration-500"
        />

        <p className="mt-3 text-lg font-bold text-green-600">
          -11kg
        </p>

        <p className="text-sm text-gray-600">
          José – 45 dias
        </p>

      </div>

    </div>

  </div>

</section>


)

}

