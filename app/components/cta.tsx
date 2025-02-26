import { Button } from "./shared/button";

const Cta = () => {
  return (
    <section id="contact" className="w-full px-4 pb-16 md:py-24 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-2xl">
        <div className="flex flex-col items-center p-8 text-center md:p-12 lg:py-44">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl">
            Your Memories, Your Style
          </h2>
          <p className="mb-8 max-w-[600px] text-base font-light text-purple-100 md:text-lg">
            Join thousands of users creating stunning photo trios with our
            innovative app.
          </p>
          <Button
            variant="default"
            className="bg-white px-8 py-3 text-purple-500"
            href="/welcome"
          >
            Get Started
          </Button>
          <p className="mt-4 text-sm font-light text-purple-200">
            Start your free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;
