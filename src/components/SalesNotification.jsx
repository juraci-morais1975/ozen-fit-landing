import { useEffect, useState } from "react";

const names = [
"Maria",
"João",
"Ana",
"Carlos",
"Fernanda",
"Juliana",
"Roberto",
"Patricia"
];

const cities = [
"São Paulo",
"Rio de Janeiro",
"Curitiba",
"Belo Horizonte",
"Porto Alegre",
"Campinas",
"Salvador"
];

export default function SalesNotification() {

const [visible, setVisible] = useState(false);
const [sale, setSale] = useState({ name: "", city: "" });

useEffect(() => {

const interval = setInterval(() => {

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomCity = cities[Math.floor(Math.random() * cities.length)];

  setSale({ name: randomName, city: randomCity });
  setVisible(true);

  setTimeout(() => {
    setVisible(false);
  }, 4000);

}, 8000);

return () => clearInterval(interval);

}, []);

if (!visible) return null;

return (


<div>
  <p className="font-semibold text-gray-800">
    🛒 {sale.name} de {sale.city}
  </p>

  <p className="text-gray-600">
    acabou de comprar agora
  </p>

</div>

);

}