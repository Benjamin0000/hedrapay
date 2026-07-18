import {
  Zap,
  ShieldCheck,
  Globe,
  Leaf,
  Building2,
  Gauge,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "3–5 Second Finality",
    description: "Near-instant transaction confirmation for a seamless payment experience.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Built on Hedera's secure hashgraph consensus with predictable performance.",
  },
  {
    icon: Globe,
    title: "Global Ready",
    description: "Support multiple countries and expand everyday payments beyond borders.",
  },
  {
    icon: Leaf,
    title: "Carbon Negative",
    description: "Support sustainable blockchain technology with a minimal environmental footprint.",
  },
  {
    icon: Building2,
    title: "Enterprise Governance",
    description: "Backed by globally recognized organizations governing the Hedera network.",
  },
  {
    icon: Gauge,
    title: "Low Network Fees",
    description: "Micro-fees make even small-value bill payments economically viable.",
  },
];

export default function WhyHedera() {
  return (
    <section
      id="why-hedera"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-violet-300">
            Why Hedera?
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">
            Built Natively
            <br />
            For the Hedera Network
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">
            HedraPay leverages Hedera's speed, security, low fees,
            and enterprise-grade infrastructure to make HBAR useful
            for real-world everyday payments.
          </p>

        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500/40 hover:bg-white/10"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/20 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="text-white" size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}