import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Create, Build & Grow
        <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {' '}
          With OSF
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl">
        OSF helps startups, creators, and businesses grow faster with modern
        websites, UI/UX design, graphics, AI/ML solutions, and digital branding
        — all at startup‑friendly pricing.
      </p>

      <div className="flex flex-col sm:flex-row justify-center my-10 gap-3">
        <a
          href="#"
          className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md text-center"
        >
          Get a free Quote
        </a>
        <a href="#" className="py-3 px-4 rounded-md border text-center">
          Explore Our Services
        </a>
      </div>

      <div className="mt-10 text-center text-neutral-100 max-w-4xl">
        <h3 className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-2xl inline-block">
          WHAT WE DO ?
        </h3>
        <p className="mt-4 text-xl">
          Website Development, UI/UX Designing, Graphic Design & Branding,
          AI/ML Automations, Marketing Content & Video Editing
        </p>
      </div>

      <div className="mt-10 text-center text-neutral-100 max-w-4xl">
        <h3 className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text text-2xl inline-block">
          WHY CHOOSE OSF ?
        </h3>
        <ul className="mt-4">
          <li className="text-xl">
            Fast Delivery, Skilled Team of Developers, Affordable Startup
            Pricing, Custom Solutions for Every Business
          </li>
        </ul>
      </div>

      <div className="flex flex-col md:flex-row mt-10 justify-center w-full border-b border-neutral-900 pb-6 gap-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-0 md:mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
        </video>

        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full md:w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-0 md:mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
        </video>
      </div>

    </div>
  );
};

export default HeroSection;
