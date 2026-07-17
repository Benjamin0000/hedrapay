import {
    Receipt,
    Coins,
    Gift,
    Globe
} from "lucide-react";

const stats = [

{
title:"Bills Paid",
value:"39",
icon:Receipt,
color:"bg-blue-100 text-blue-600"
},

{
title:"HBAR Spent",
value:"1,320",
icon:Coins,
color:"bg-violet-100 text-violet-600"
},

{
title:"Rewards",
value:"58 HBAR",
icon:Gift,
color:"bg-green-100 text-green-600"
},

{
title:"Countries",
value:"7",
icon:Globe,
color:"bg-orange-100 text-orange-600"
}

];

export default function StatsCards(){

return(

<div className="grid grid-cols-4 gap-6">

{
stats.map(stat=>{

const Icon=stat.icon;

return(

<div
key={stat.title}
className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition"
>

<div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${stat.color}`}>

<Icon size={24}/>

</div>

<p className="mt-6 text-slate-500">

{stat.title}

</p>

<h2 className="mt-2 text-3xl font-bold">

{stat.value}

</h2>

</div>

)

})

}

</div>

)

}