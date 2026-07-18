import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setHide(true);
          }, 300);

          return 100;
        }

        return old + 2;
      });
    }, 28);

    return () => clearInterval(interval);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030712]">

        <div className="absolute h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[140px] animate-pulse" />
        <div className="absolute right-20 bottom-20 h-[350px] w-[350px] rounded-full bg-blue-700/20 blur-[120px] animate-pulse" />

      <div className="text-center">

        {/* Logo */}

        <div className="mx-auto mb-10 h-24 w-24 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-[0_0_80px_rgba(124,58,237,.45)]">

          <span className="text-4xl font-black text-white">

            H

          </span>

        </div>

        <h1 className="text-5xl font-black text-white">

          HedraPay

        </h1>

        <p className="mt-3 text-slate-400">

          Loading the future of payments...

        </p>

        <div className="mt-10 w-80 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

        <p className="mt-5 text-violet-300">

          {progress}%

        </p>

      </div>

    </div>
  );
}