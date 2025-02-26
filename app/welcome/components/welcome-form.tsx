"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { CornerDownLeft } from "lucide-react";

interface WelcomeFormProps {
  onSubmit: (name: string) => void;
}

export default function WelcomeForm({ onSubmit }: WelcomeFormProps) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full max-w-md flex-col gap-6 text-start md:gap-8"
    >
      <h1 className="text-4xl font-light text-white">Hi Polarizer!</h1>
      <p className="text-sm text-white">
        Before we begin, what name would you like to use?
      </p>
      <form onSubmit={handleSubmit} className="relative space-y-8">
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="focus:within-outline-none w-full rounded-none border-t-0 border-r-0 border-b border-l-0 border-b-white bg-transparent px-0 py-2 text-white shadow-none placeholder:text-white focus-within:border-b-white focus-within:ring-0 focus:border-b-white focus:ring-0 focus:outline-none focus-visible:border-b-white focus-visible:ring-0 focus-visible:outline-none"
        />
        <CornerDownLeft className="absolute top-2 right-0 size-5 text-white" />
      </form>
    </motion.div>
  );
}
