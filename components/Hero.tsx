/* eslint-disable @next/next/no-img-element */
import CTAButton from "./CTAButton";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="bg-green">
      <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-14 sm:py-20 lg:pr-12">
          <h1 id="hero-heading" className="!text-paper">
            A Poverty-Free Ethiopia Where Equity and Equality Are Ensured.
          </h1>
          <p className="mt-6 max-w-prose text-xl text-paper">
            Since 2005, CVDA has been empowering communities through health, education, agriculture, and environmental conservation.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <CTAButton href="/get-involved" variant="primary">Donate Now</CTAButton>
            <CTAButton href="/impact" variant="outline-light">Explore Our Impact</CTAButton>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[560px]">
          <img
            src="/images/hero-community.jpg"
            alt="Community members gathered at a CVDA meeting in Ethiopia"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}
