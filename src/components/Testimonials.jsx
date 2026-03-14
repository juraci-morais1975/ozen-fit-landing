<<<<<<< HEAD
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Avaliações de Clientes
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={800}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 }
          }}
        >

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/cliente2.jfif"
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm mb-3">
                Estou muito satisfeito com o produto.
              </p>
              <p className="font-semibold">Mariana</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/cliente1.jfif"
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm mb-3">
                Chegou rápido e gostei bastante.
              </p>
              <p className="font-semibold">Carlos</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/cliente3.jfif"
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm mb-3">
                Produto muito bom.
              </p>
              <p className="font-semibold">Juliana</p>
            </div>
          </SwiperSlide>

        </Swiper>
  

      </div>
      
    </section>
  );
=======
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Avaliações de Clientes
        </h2>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          speed={800}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 }
          }}
        >

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/cliente2.jfif"
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm mb-3">
                Estou muito satisfeito com o produto.
              </p>
              <p className="font-semibold">Mariana</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/cliente1.jfif"
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm mb-3">
                Chegou rápido e gostei bastante.
              </p>
              <p className="font-semibold">Carlos</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <img
                src="/cliente3.jfif"
                className="w-16 h-16 rounded-full mx-auto mb-3"
              />
              <div className="text-yellow-500 mb-2">★★★★★</div>
              <p className="text-gray-600 text-sm mb-3">
                Produto muito bom.
              </p>
              <p className="font-semibold">Juliana</p>
            </div>
          </SwiperSlide>

        </Swiper>
  

      </div>
      
    </section>
  );
>>>>>>> b209dbbab8d96200a6aff07cce35df8270a48fde
}