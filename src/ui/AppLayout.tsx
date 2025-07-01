import { regularOpacityVariants } from "@/utils/variants";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { useDirection } from "@/hooks/useDirection";

function AppLayout() {
  useDirection();

  return (
    <motion.div
      variants={regularOpacityVariants}
      initial="hidden"
      animate="visible"
      className="grid h-screen grid-cols-[16rem_1fr] grid-rows-[4.5rem_1fr]"
    >
      <SideBar />
      <NavBar />
      <main className="row-start-2 row-end-3 overflow-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
    </motion.div>
  );
}

export default AppLayout;
