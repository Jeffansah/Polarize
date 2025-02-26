import { Camera, Download, Share2 } from "lucide-react";
import Image from "next/image";
import feature1 from "../../public/images/feature_1.jpg";
import feature2 from "../../public/images/feature_2.jpg";
import feature3 from "../../public/images/feature_3.jpg";
// import feature4 from "../../public/images/feature_4.jpg";

const Features = () => {
  return (
    <section
      id="features"
      className="relative w-full overflow-hidden py-12 max-md:pb-24 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 xl:px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-light tracking-tighter sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="max-w-[600px] font-light text-gray-500 md:text-base/relaxed dark:text-gray-400">
                Create stunning photo trios in three simple steps.
              </p>
            </div>
            <ul className="grid gap-4 py-4">
              <li className="flex items-center space-x-2">
                <Camera className="h-5 w-5 text-purple-500" />
                <span className="font-light">Snap three quick photos</span>
              </li>
              <li className="flex items-center space-x-2">
                <Share2 className="h-5 w-5 text-purple-500" />
                <span className="font-light">Apply creative effects</span>
              </li>
              <li className="flex items-center space-x-2">
                <Download className="h-5 w-5 text-purple-500" />
                <span className="font-light">Download or share instantly</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="animate-blob absolute top-0 -left-4 size-72 rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-2000 absolute top-1/2 -left-4 size-72 rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter" />
            <div className="animate-blob animation-delay-4000 absolute -bottom-16 left-20 size-72 rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter" />
            <div className="relative space-y-4">
              <div className="max-w-max -rotate-6 transform rounded-lg bg-white p-2 shadow-xl transition-transform duration-300 hover:rotate-0">
                <Image
                  src={feature1}
                  width={400}
                  alt="Photo example 1"
                  className="size-92 rounded-lg object-cover"
                />
              </div>
              <div className="max-w-max rotate-3 transform rounded-lg bg-white p-2 shadow-xl transition-transform duration-300 hover:rotate-0">
                <Image
                  src={feature2}
                  alt="Photo example 2"
                  className="size-92 rounded-lg object-cover"
                />
              </div>
              <div className="max-w-max -rotate-3 transform rounded-lg bg-white p-2 shadow-xl transition-transform duration-300 hover:rotate-0">
                <Image
                  src={feature3}
                  alt="Photo example 3"
                  className="size-92 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
