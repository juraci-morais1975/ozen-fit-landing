import OffersCountdown from "./OffersCountdown";

export default function OfferSection() {

return (

<section id="oferta" className="bg-green-700 py-16">

  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-white text-3xl font-bold text-center mb-12">
      Escolha seu Tratamento
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white rounded-xl p-6 text-center shadow">

        <p className="text-2xl font-bold text-green-700">
        PARA EXPERIMENTAR LEVE 1!+E-book
        </p>

        <img
          src="/1+ebook.png"
          alt="kit1"
          className="mx-auto mb-4 w-40"
        />

        <p className="text-gray-600">
          POR APENAS
        </p>

        <p className="text-3xl font-bold text-green-700">
        12x R$20,27
OU R$197,00 A VISTA COM DESCONTO
        </p>
<p className="text-green-600 font-bold mt-2">
🎁 BÔNUS: Guia Detox para Emagrecimento
</p>
        <OffersCountdown />

        <a
          href="#"
          className="bg-green-600 text-white py-3 mt-4 rounded-full block font-bold animate-pulse hover:bg-green-700 transition"
        >
          COMPRAR AGORA
        </a>

        <p className="text-sm mt-3 text-gray-500">
          Frete R$29,90
        </p>

      </div>


      <div className="bg-white rounded-xl p-6 text-center shadow border-4 border-yellow-400 relative">

        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
          MAIS VENDIDO
        </div>

        <p className="text-2xl font-bold text-green-700">
         PAGUE 2 E
LEVE 3!
+E-book
        </p>

        <img
          src="/3+ebook.png"
          alt="kit3"
          className="mx-auto mb-4 w-40"
        />

        <p className="text-gray-600">
          POR APENAS
        </p>

        <p className="text-3xl font-bold text-green-700">
          12x R$30,35
OU R$297,00 A VISTA COM DESCONTO
        </p>
<p className="text-green-600 font-bold mt-2">
🎁 BÔNUS: Guia Detox para Emagrecimento
</p>
        <OffersCountdown />

        <a
          href="#"
          className="bg-green-600 text-white py-3 mt-4 rounded-full block font-bold animate-pulse hover:bg-green-700 transition"
        >
          COMPRAR AGORA
        </a>

        <p className="text-sm mt-3 text-green-700">
          Frete Grátis
        </p>

      </div>


      <div className="bg-white rounded-xl p-6 text-center shadow">

        <p className="text-2xl font-bold text-green-700">
          PAGUE 3 E
LEVE 5!
+E-book
        </p>

        <img
          src="/5+ebook.jpg"
          alt="kit5"
          className="mx-auto mb-4 w-40"
        />

        <p className="text-gray-600">
          POR APENAS
        </p>

        <p className="text-3xl font-bold text-green-700">
         12x R$40,84
OU R$397,00 A VISTA COM DESCONTO
        </p>
<p className="text-green-600 font-bold mt-2">
🎁 BÔNUS: Guia Detox para Emagrecimento
</p>
        <OffersCountdown />

        <a
          href="#"
          className="bg-green-600 text-white py-3 mt-4 rounded-full block font-bold animate-pulse hover:bg-green-700 transition"
        >
          COMPRAR AGORA
        </a>

        <p className="text-sm mt-3 text-green-700">
          Frete Grátis
        </p>

      </div>

    </div>

  </div>

</section>

);

}

