import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import AvatarGenerator from "./AvatarGenerator";
import { motion } from "framer-motion";

interface DataTypes {
  teacher_id: number;
  full_name: string;
  salary: number;
  email: string;
  subject?: string;
}

function Card({ data }: { data: DataTypes }) {
  const { teacher_id, full_name, email, subject } = data;

  return (
    // The card itself is now a flex column to manage its internal sections.
    <motion.div
      className="group relative flex w-full max-w-xs flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-200/40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 150, damping: 20 }}
    >
      {/* The banner's height is fixed. shrink-0 prevents it from shrinking. */}
      <div className="h-20 shrink-0 bg-gradient-to-r from-indigo-500 to-purple-600" />

      {/* The avatar is positioned absolutely, with a z-index to ensure it's on top. */}
      <div className="absolute top-[80px] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <AvatarGenerator
          name={full_name}
          size={80}
          className="ring-4 ring-white"
        />
      </div>

      {/* This content container is now a flex column that grows to fill available space
          and pushes its content to the top and bottom.
      */}
      <div className="flex flex-grow flex-col justify-between p-6 pt-12">
        {/* This div groups the top part of the content together. */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-bold text-slate-900">{full_name}</h3>
            <p className="text-sm text-slate-500">{email}</p>
          </div>
          <div className="h-6">
            {subject && (
              <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-800 capitalize">
                {subject}
              </span>
            )}
          </div>
        </div>

        {/* The button is now the last item, pushed to the bottom by justify-between. */}
        <Link
          to={`/teachers/${teacher_id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 group-hover:border-indigo-400 hover:bg-slate-100 hover:text-slate-900"
        >
          <FaRegUser className="h-4 w-4" />
          View Profile
        </Link>
      </div>
    </motion.div>
  );
}

export default Card;
