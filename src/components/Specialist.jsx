export default function Specialist() {

return (

<section className="py-16 bg-gray-100">

  <div className="max-w-6xl mx-auto px-4">

    <div className="grid md:grid-cols-2 gap-10 items-center">

      <div className="text-center">

        <img
          src="/dr2.png"
          alt="especialista"
          className="rounded-xl mx-auto shadow-lg w-72"
        />

        <div className="mt-4 text-yellow-500 font-bold">
          ⭐⭐⭐⭐⭐ 4.8 / 5 Avaliação
        </div>

        <div className="mt-2 bg-green-600 text-white px-4 py-1 rounded-full inline-block text-sm">
          Especialista em Nutrição
        </div>

      </div>

      <div>

        <h2 className="text-3xl font-bold mb-4">
          Recomendado por Especialistas
        </h2>

        <p className="text-gray-700 mb-4">
          O Fiber Slim possui uma combinação de ingredientes naturais
          selecionados que auxiliam no processo de emagrecimento saudável
          e no funcionamento do metabolismo.
        </p>

        <p className="text-gray-700 mb-6">
          Quando aliado a uma rotina equilibrada, pode contribuir para
          resultados visíveis e melhoria do bem-estar geral.
        </p>

        <div className="space-y-2 font-semibold text-green-600">

          <p>✔ Ingredientes naturais selecionados</p>

          <p>✔ Auxilia no metabolismo</p>

          <p>✔ Pode ajudar na redução de gordura</p>

          <p>✔ Fórmula utilizada por milhares de pessoas</p>

        </div>

        <div className="mt-6 p-4 bg-white rounded-lg shadow">

          <p className="font-semibold text-gray-800">
            Evidência Nutricional
          </p>

          <p className="text-sm text-gray-600 mt-2">
            Ingredientes naturais utilizados em suplementos alimentares
            são amplamente estudados por sua contribuição no controle
            metabólico e suporte ao emagrecimento saudável.
          </p>

        </div>

        <p className="mt-6 font-bold">
          Dr. Carlos L. de Souza
        </p>

        <p className="text-sm text-gray-500">
          Nutricionista Especialista em Emagrecimento
        </p>

      </div>

    </div>

  </div>

</section>

);

}

