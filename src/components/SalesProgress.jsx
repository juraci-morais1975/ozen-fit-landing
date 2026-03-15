import { useEffect, useState } from "react";

export default function SalesProgress(){

const [progress,setProgress] = useState(62);

useEffect(()=>{

const interval = setInterval(()=>{

setProgress(prev => {
if(prev >= 92) return prev
return prev + Math.floor(Math.random()*2)
})

},5000)

return ()=> clearInterval(interval)

},[])

return(

<div style={{maxWidth:"600px",margin:"20px auto"}}>

<p style={{fontWeight:"bold",textAlign:"center"}}>
🔥 {progress}% das unidades vendidas hoje
</p>

<div style={{
background:"#e5e7eb",
borderRadius:"10px",
overflow:"hidden",
marginTop:"8px"
}}>

<div style={{
width: progress+"%",
background:"#16a34a",
height:"10px"
}} />

</div>

</div>

)

}

