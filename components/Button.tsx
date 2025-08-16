"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({ children, href="#contacto" }:{children:React.ReactNode;href?:string}) {
  return (
    <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}
      href={href}
      className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 font-medium text-white shadow-lg shadow-brand-500/30">
      {children} <ArrowRight className="h-5 w-5" />
    </motion.a>
  );
}
