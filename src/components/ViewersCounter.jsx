<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function ViewersCounter() {

const [viewers, setViewers] = useState(37);

useEffect(() => {

const interval = setInterval(() => {

  setViewers((prev) => {

    const change = Math.floor(Math.random() * 5) - 2;
    const newValue = prev + change;

    if (newValue < 25) return 25;
    if (newValue > 80) return 80;

    return newValue;

  });

}, 4000);

return () => clearInterval(interval);

}, []);

return (


<div style={{
  textAlign:"center",
  fontWeight:"bold",
  marginTop:"10px"
}}>

  👀 {viewers} pessoas estão vendo esta oferta agora

</div>

);

}
=======
import { useEffect, useState } from "react";

export default function ViewersCounter() {

const [viewers, setViewers] = useState(37);

useEffect(() => {

const interval = setInterval(() => {

  setViewers((prev) => {

    const change = Math.floor(Math.random() * 5) - 2;
    const newValue = prev + change;

    if (newValue < 25) return 25;
    if (newValue > 80) return 80;

    return newValue;

  });

}, 4000);

return () => clearInterval(interval);

}, []);

return (


<div style={{
  textAlign:"center",
  fontWeight:"bold",
  marginTop:"10px"
}}>

  👀 {viewers} pessoas estão vendo esta oferta agora

</div>

);

}
>>>>>>> b209dbbab8d96200a6aff07cce35df8270a48fde
