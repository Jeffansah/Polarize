"use client";

import { Button } from "@/app/components/shared/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ConfirmationMessageProps {
  name: string;
}

export default function ConfirmationMessage({
  name,
}: ConfirmationMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-md flex-col gap-6 text-start md:gap-8"
    >
      <h2 className="text-4xl font-light text-white">Welcome, {name}!</h2>
      <p className="text-white">
        We're ready to start shooting some photos! Let's begin the experience
        and capture some great moments.
      </p>
      <div className="relative max-w-max">
        <Button
          href="/photo-booth"
          variant="default"
          className="bg-white pr-10 text-purple-500 hover:bg-purple-500 hover:text-white"
        >
          Enter Photo Booth
        </Button>
        <ArrowRight className="absolute top-[7.8px] right-2 z-50 size-6 text-purple-400" />
      </div>
    </motion.div>
  );
}
