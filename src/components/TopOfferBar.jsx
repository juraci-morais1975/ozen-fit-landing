import { useEffect, useState } from "react"

export default function TopOfferBar(){

const [time,setTime] = useState(900)

useEffect(()=>{

const timer = setInterval(()=>{

setTime(prev => prev > 0 ? prev - 1 : 0)

},1000)

return ()=> clearInterval(timer)

},[])

const minutes = Math.floor(time/60)
const seconds = time % 60

return(

<div className="bg-red-600 text-white text-center py-2 font-bold">

⚠ OFERTA TERMINA EM {minutes}:{seconds < 10 ? "0"+seconds : seconds}

</div>

)

}

