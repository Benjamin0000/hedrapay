import {
  Smartphone,
  Zap,
  Wifi,
  Tv,
  Gift,
  Database,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Airtime",
    description: "Recharge MTN, Airtel, Glo and 9mobile using HBAR.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: Database,
    title: "Mobile Data",
    description: "Purchase data bundles instantly from all major providers.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Electricity",
    description: "Pay electricity bills and receive tokens immediately.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Tv,
    title: "TV Subscription",
    description: "Renew DStv, GOtv and StarTimes in seconds.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Wifi,
    title: "Internet",
    description: "Pay Spectranet, FibreOne, Smile and more.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: Gift,
    title: "HBAR Rewards",
    description: "Earn cashback and unlock exclusive rewards.",
    color: "from-indigo-500 to-violet-500",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-violet-300">
            Services
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Everything You Need

            <br />

            For Everyday Payments

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">

            HedraPay transforms HBAR into a practical payment
            method for everyday services.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="service-card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-violet-500/40 hover:bg-white/10"
              >
                {/* Glow */}

                <div
                  className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r ${service.color} opacity-20 blur-3xl transition-all duration-500 group-hover:scale-150`}
                />

                {/* Icon */}

                <div
                  className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color}`}
                >
                  <Icon
                    className="text-white"
                    size={30}
                  />
                </div>

                <h3 className="relative mt-8 text-2xl font-bold text-white">

                  {service.title}

                </h3>

                <p className="relative mt-4 leading-8 text-slate-400">

                  {service.description}

                </p>

                <button className="relative mt-8 flex items-center gap-2 text-violet-400 transition group-hover:gap-4">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}