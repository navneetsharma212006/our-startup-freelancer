import React, { useState } from "react";
import { Send, AlertCircle, CheckCircle } from "lucide-react";

const services = ['Logo Design', 'Web Design', 'Editing', 'Ads', 'Branding'];

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    servicetype: services[0],
    description: "",
    budget: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || 'Failed to submit enquiry');

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        business: "",
        servicetype: services[0],
        description: "",
        budget: ""
      });

      // Auto-hide success message after 3s
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-neutral-800 text-orange-500 rounded-full px-4 py-1 text-sm font-medium uppercase">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mt-6 tracking-wide">
            Request a Service
          </h1>
          <p className="mt-4 text-neutral-400 text-lg max-w-xl mx-auto">
            Tell us about your project and we'll get back to you with a custom quote.
          </p>
        </div>

        {/* Success Message */}
        {success && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-md flex items-center gap-3">
            <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
            <div>
              <p className="text-green-400 font-semibold">Success!</p>
              <p className="text-green-300 text-sm">Your enquiry has been submitted. We'll contact you soon.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-md flex items-center gap-3">
            <AlertCircle className="text-red-500 flex-shrink-0" size={20} />
            <div>
              <p className="text-red-400 font-semibold">Error</p>
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-neutral-800/50 border border-neutral-700 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                placeholder="john@example.com"
              />
            </div>

            {/* Business */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Business Name
              </label>
              <input
                type="text"
                name="business"
                value={formData.business}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
                placeholder="Your Business"
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Service Type *
              </label>
              <select
                name="servicetype"
                value={formData.servicetype}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:border-orange-500"
              >
                {services.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Budget */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Budget Range (Optional)
            </label>
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
              placeholder="e.g., 50,000 - 1,00,000"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-neutral-300 mb-2">
              Project Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500"
              placeholder="Tell us about your project, goals, and requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 disabled:from-neutral-600 disabled:to-neutral-700 text-white font-semibold py-3 rounded-md transition"
          >
            <Send size={18} />
            {loading ? 'Submitting...' : 'Submit Enquiry'}
          </button>

          <p className="text-xs text-neutral-500 text-center mt-4">
            * Required fields
          </p>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
