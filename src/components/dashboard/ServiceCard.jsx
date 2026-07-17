import { motion } from "framer-motion";

export default function ServiceCard({

title,
subtitle,
icon,
color

}){

return(

<motion.div

whileHover={{
y:-6
}}

className="group cursor-pointer rounded-3xl bg-white p-7 shadow-sm transition hover:shadow-xl"

>

<div className={`h-16 w-16 rounded-2xl flex items-center justify-center text-white ${color}`}>

<span className="text-3xl">

{icon}

</span>

</div>

<h2 className="mt-6 text-xl font-bold">

{title}

</h2>

<p className="mt-2 text-slate-500">

{subtitle}

</p>

<div className="mt-6 text-violet-600 opacity-0 group-hover:opacity-100 transition">

Continue →

</div>

</motion.div>

)

}