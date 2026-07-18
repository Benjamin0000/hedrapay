import {
  Wallet,
  Search,
  CreditCard,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description:
      "Connect your Hedera wallet securely to begin paying bills with HBAR.",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: Search,
    title: "Choose a Service",
    description:
      "Select Airtime, Data, Electricity, Internet or TV Subscription.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: CreditCard,
    title: "Pay with HBAR",
    description:
      "Review the payment and approve the transaction directly from your wallet.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: CheckCircle2,
    title: "Payment Completed",
    description:
      "Receive confirmation instantly while your bill is processed.",
    color: "from-green-500 to-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-violet-300">
            How It Works
          </span>

          <h2 className="mt-8 text-5xl font-black text-white">

            Paying Bills Should

            <br />

            Be This Simple

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-400">

            From wallet connection to bill confirmation,
            HedraPay keeps the entire experience simple,
            secure and incredibly fast.

          </p>

        </div>

        <div className="mt-24">

          {steps.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.title}
                className="flex flex-col items-center"
              >

                <div className="group w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-violet-500/40 hover:bg-white/10 hover:-translate-y-2">

                  <div className="flex flex-col md:flex-row md:items-center gap-8">

                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r ${step.color}`}
                    >

                      <Icon
                        size={34}
                        className="text-white"
                      />

                    </div>

                    <div className="flex-1">

                      <div className="flex items-center gap-3">

                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 font-bold text-white">

                          {index + 1}

                        </span>

                        <h3 className="text-3xl font-bold text-white">

                          {step.title}

                        </h3>

                      </div>

                      <p className="mt-5 text-lg leading-8 text-slate-400">

                        {step.description}

                      </p>

                    </div>

                  </div>

                </div>

                {index !== steps.length - 1 && (

                  <ArrowDown
                    className="my-8 text-violet-400 animate-bounce"
                    size={34}
                  />

                )}

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}