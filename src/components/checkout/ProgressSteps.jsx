import { Check } from "lucide-react";

export default function ProgressSteps({ currentStep }) {
  const steps = [
    "Details",
    "Review",
    "Wallet",
    "Success",
  ];

  return (
    <div className="mb-10 flex items-center justify-between">
      {steps.map((step, index) => {
        const active = index <= currentStep;

        return (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full border-2 transition ${
                  active
                    ? "border-violet-600 bg-violet-600 text-white"
                    : "border-slate-300 bg-white text-slate-400"
                }`}
              >
                {index < currentStep ? (
                  <Check size={18} />
                ) : (
                  index + 1
                )}
              </div>

              <p
                className={`mt-2 text-sm ${
                  active
                    ? "font-semibold text-slate-900"
                    : "text-slate-500"
                }`}
              >
                {step}
              </p>
            </div>

            {index !== steps.length - 1 && (
              <div
                className={`mx-3 h-1 flex-1 rounded ${
                  index < currentStep
                    ? "bg-violet-600"
                    : "bg-slate-200"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}