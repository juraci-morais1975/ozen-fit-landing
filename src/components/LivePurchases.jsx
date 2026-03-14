<<<<<<< HEAD
import { useEffect, useState } from "react"

export default function LivePurchases(){

const [buyers,setBuyers] = useState(12)

useEffect(()=>{

const timer = setInterval(()=>{

setBuyers(prev => {

const change = Math.floor(Math.random()*3)

return prev + change

})

},6000)

return ()=> clearInterval(timer)

},[])

return(

<div className="text-center font-semibold text-green-600 mt-4">

🔥 {buyers} pessoas compraram nas últimas horas

</div>

)

}
=======
import { useEffect, useState } from "react"

export default function LivePurchases(){

const [buyers,setBuyers] = useState(12)

useEffect(()=>{

const timer = setInterval(()=>{

setBuyers(prev => {

const change = Math.floor(Math.random()*3)

return prev + change

})

},6000)

return ()=> clearInterval(timer)

},[])

return(

<div className="text-center font-semibold text-green-600 mt-4">

🔥 {buyers} pessoas compraram nas últimas horas

</div>

)

}
>>>>>>> b209dbbab8d96200a6aff07cce35df8270a48fde
