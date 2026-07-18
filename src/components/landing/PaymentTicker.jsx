const payments = [
  "Benjamin purchased ₦2,000 Airtime • 4.4 HBAR",
  "Grace renewed DStv • 43.3 HBAR",
  "David paid Electricity • 22 HBAR",
  "Ada purchased Internet • 39 HBAR",
  "Samuel bought Data • 2.7 HBAR",
  "Michael renewed GOtv • 17 HBAR",
];

export default function PaymentTicker(){

    return(

        <div className="overflow-hidden border-y border-white/10 bg-white/5 backdrop-blur-xl py-5">

            <div className="flex whitespace-nowrap animate-marquee gap-14">

                {[...payments,...payments].map((item,index)=>(

                    <div
                        key={index}
                        className="flex items-center gap-3 text-slate-300"
                    >

                        <div className="h-3 w-3 rounded-full bg-green-400"/>

                        {item}

                    </div>

                ))}

            </div>

        </div>

    )

}