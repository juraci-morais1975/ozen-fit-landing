import { useEffect, useState } from "react";

export default function StickyBuyBar() {

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


<div
  style={{
    position: "fixed",
    bottom: "50px",
    left: "0",
    width: "100%",
    background: "#16a34a",
    color: "#fff",
    padding: "12px",
    textAlign: "center",
    zIndex: 40
  }}
>

  <p style={{fontWeight:"bold"}}>
    ⚠ Promoção ativa — poucas unidades restantes
  </p>

</div>


);
}

