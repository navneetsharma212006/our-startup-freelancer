import React, { useState, useRef, useEffect } from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const services = ['Logo Design', 'Web Design', 'Editing', 'Ads', 'Branding'];

const HeroSection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const toastTimer = useRef(null);

  const handleEstimate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch('http://localhost:5000/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service: selectedService })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      const payload = data.data ?? data;
      setResult(payload);
      setShowToast(true);
      if (toastTimer.current) clearTimeout(toastTimer.current);
      toastTimer.current = setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 px-4">
      {showToast && result && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-md z-50">
          Estimated: ₹{result.estimated_cost.average.toLocaleString()}
        </div>
      )}
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

      <div className="w-full max-w-2xl bg-neutral-900/30 rounded-md p-4 my-6">
        <h4 className="text-lg font-semibold text-center mb-3">Quick Estimate</h4>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <select
            className="p-2 rounded-md bg-neutral-800 border"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>

          <button
            onClick={handleEstimate}
            className="bg-linear-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md text-white"
            disabled={loading}
          >
            {loading ? 'Estimating…' : 'Estimate Cost'}
          </button>
        </div>

        <div className="mt-4 text-center">
          {error && <div className="text-red-400">Error: {error}</div>}
          {result && (
            <div className="text-left bg-neutral-800 p-3 rounded-md inline-block">
              <div className="font-semibold">{result.service}</div>
              <div>Average: ₹{result.estimated_cost.average.toLocaleString()}</div>
              <div>Range: ₹{result.estimated_cost.min.toLocaleString()} - ₹{result.estimated_cost.max.toLocaleString()}</div>
              <div className="text-sm text-neutral-400">{result.note}</div>
            </div>
          )}
        </div>
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
