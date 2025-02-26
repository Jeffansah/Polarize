"use client";

import { AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import WelcomeForm from "./components/welcome-form";
import ConfirmationMessage from "./components/confirmation-message";

const Welcome = () => {
  const [name, setName] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setName(storedName);
      setShowConfirmation(true);
    }
  }, []);

  const handleSubmit = (submittedName: string) => {
    if (submittedName.trim()) {
      localStorage.setItem("userName", submittedName.trim());
      setName(submittedName.trim());
      setShowConfirmation(true);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 p-4 text-sm">
      <AnimatePresence mode="wait">
        {!showConfirmation ? (
          <WelcomeForm key="welcome" onSubmit={handleSubmit} />
        ) : (
          <ConfirmationMessage key="confirmation" name={name} />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Welcome;
