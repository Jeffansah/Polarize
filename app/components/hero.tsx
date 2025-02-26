import React from "react";
import { Button } from "./shared/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative mt-[52px] w-full overflow-hidden py-12 md:mt-[60px] md:py-24 lg:py-32 xl:py-48"
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-y-4 text-center md:gap-y-8 xl:gap-y-10">
          <div className="flex flex-col gap-y-2 md:gap-y-6">
            <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-3xl font-light tracking-tight text-transparent sm:text-4xl md:text-5xl lg:text-7xl/none dark:from-white">
              Capture Moments, Create Art
            </h1>
            <p className="mx-auto max-w-[500px] font-light text-gray-500 md:text-base dark:text-white">
              Transform your memories into stunning photo trios with our
              innovative photobooth app.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="default" href="/welcome">
              Start Creating
            </Button>
            <Button variant="outline" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 origin-top-left -skew-y-6 transform bg-purple-100 md:inset-y-0 md:right-0 md:w-1/2 dark:bg-purple-500"></div>
    </section>
  );
};
export default Hero;
