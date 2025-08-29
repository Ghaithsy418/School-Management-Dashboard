import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface InformationCardProps {
  icon: ReactNode;
  stats: string | number;
  title: string;
  iconBgColor?: string;
  gradient?: string;
  variants?: Variants;
}

function InformationCard({
  icon,
  title,
  stats,
  iconBgColor = "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600",
  gradient = "from-white via-gray-50 to-slate-100",
  variants,
}: InformationCardProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="group relative flex-1 overflow-hidden rounded-2xl"
    >
      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 opacity-0 blur-sm transition-all duration-700 group-hover:opacity-100`}
      />

      <div
        className={`relative flex items-center gap-6 rounded-2xl border-2 border-slate-200/80 bg-gradient-to-br ${gradient} px-6 py-8 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/60 hover:shadow-2xl hover:shadow-indigo-500/25`}
      >
        <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

        <div className="relative flex-shrink-0">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconBgColor} transform shadow-2xl shadow-indigo-500/30 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 group-hover:shadow-purple-500/40`}
          >
            <div className="transform text-lg text-white drop-shadow-sm transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          </div>

          <div
            className={`absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-600 opacity-0 group-hover:opacity-40`}
          />
          <div
            className={`absolute -inset-2 animate-ping rounded-3xl bg-gradient-to-br from-indigo-300/20 to-pink-400/20 opacity-0 group-hover:opacity-60`}
          />
        </div>

        <div className="relative z-10 flex min-w-0 flex-1 flex-col">
          <p className="transform truncate bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-2xl font-black text-transparent drop-shadow-sm transition-all duration-300 group-hover:scale-110">
            {stats}
          </p>
          <h3 className="mt-1 transform truncate text-xs font-bold tracking-widest text-slate-700 uppercase drop-shadow-sm transition-all duration-300 group-hover:text-slate-800">
            {title}
          </h3>

          <div className="mt-2 h-1 w-0 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-sm transition-all duration-500 group-hover:w-16"></div>
        </div>

        <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-indigo-400/40 opacity-0 shadow-lg transition-all duration-700 group-hover:animate-bounce group-hover:opacity-100"></div>
        <div className="absolute right-6 bottom-3 h-1.5 w-1.5 rounded-full bg-purple-400/40 opacity-0 shadow-lg transition-all delay-150 duration-700 group-hover:animate-pulse group-hover:opacity-100"></div>
        <div className="absolute top-6 right-8 h-1 w-1 rounded-full bg-pink-400/40 opacity-0 shadow-lg transition-all delay-300 duration-700 group-hover:animate-ping group-hover:opacity-100"></div>

        <div className="absolute inset-0 -top-4 -translate-x-full skew-x-12 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"></div>
      </div>
    </motion.div>
  );
}

export default InformationCard;
