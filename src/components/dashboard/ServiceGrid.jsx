import { useNavigate } from "react-router-dom";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid(){

const navigate=useNavigate();

const services=[

{
title:"Airtime",
subtitle:"Recharge mobile lines instantly",
icon:"📱",
color:"bg-violet-600",
path:"/airtime"
},

{
title:"Electricity",
subtitle:"Pay electricity bills",
icon:"⚡",
color:"bg-yellow-500",
path:"/electricity"
},

{
title:"Data",
subtitle:"Purchase internet bundles",
icon:"📶",
color:"bg-blue-600",
path:"/data"
},

{
title:"TV",
subtitle:"DSTV, GOtv and Startimes",
icon:"📺",
color:"bg-red-500",
path:"/tv"
},

{
title:"Internet",
subtitle:"Pay ISP subscriptions",
icon:"🌍",
color:"bg-green-600",
path:"/internet"
},

{
title:"Gaming",
subtitle:"Gift cards & vouchers",
icon:"🎮",
color:"bg-pink-600",
path:"#"
}

];

return(

<div>

<div className="flex justify-between mb-6">

<h2 className="text-3xl font-bold">

Services

</h2>

</div>

<div className="grid grid-cols-3 gap-6">

{
services.map(service=>

<div
key={service.title}
onClick={()=>navigate(service.path)}
>

<ServiceCard {...service}/>

</div>

)
}

</div>

</div>

)

}