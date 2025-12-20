import React, { useState, useEffect } from "react";
import { RefreshCw, Mail, DollarSign, Briefcase } from "lucide-react";

const AllEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("http://localhost:8000/enquiry/all");
      
      if (!res.ok) throw new Error("Failed to fetch enquiries");
      
      const data = await res.json();
      setEnquiries(data || []);
    } catch (err) {
      setError(err.message || "Failed to load enquiries");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchEnquiries();
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      <div className="mt-20 tracking-wide px-4 pb-20">
        <div className="text-center mb-16">
          <span className="bg-neutral-800 text-orange-500 rounded-full px-4 py-1 text-sm font-medium uppercase">
            All Enquiries
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 tracking-wide">
            All Enquiries
          </h2>

          <p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-md">
            View and manage all service enquiries submitted by clients.
          </p>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="max-w-6xl mx-auto mb-6 p-4 bg-red-700 text-white rounded-md text-center">
            {error}
          </div>
        )}

        {/* Refresh Button */}
        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
          <h3 className="text-xl text-orange-500 font-semibold">
            Total Enquiries: {enquiries.length}
          </h3>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 disabled:bg-neutral-600 text-white px-4 py-2 rounded-md transition"
          >
            <RefreshCw size={18} />
            Refresh
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="max-w-6xl mx-auto text-center py-20">
            <div className="inline-block animate-spin">
              <RefreshCw className="text-orange-500" size={32} />
            </div>
            <p className="text-neutral-400 mt-4">Loading enquiries...</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && enquiries.length === 0 && (
          <div className="max-w-6xl mx-auto text-center py-20">
            <p className="text-neutral-400 text-lg">No enquiries found.</p>
          </div>
        )}

        {/* Enquiries Grid */}
        {!loading && enquiries.length > 0 && (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enquiries.map((enquiry, index) => (
              <div
                key={index}
                className="border border-neutral-800 rounded-xl p-6 bg-neutral-900/40 hover:border-orange-500/50 hover:bg-neutral-900/60 transition"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">{enquiry.name}</h3>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="text-orange-500 mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-neutral-500 text-sm">Email</p>
                      <p className="text-neutral-300">{enquiry.email}</p>
                    </div>
                  </div>

                  {/* Service Type */}
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-orange-500 mt-1 shrink-0" size={18} />
                    <div>
                      <p className="text-neutral-500 text-sm">Service Type</p>
                      <p className="text-neutral-300">{enquiry.servicetype}</p>
                    </div>
                  </div>

                  {/* Budget */}
                  {enquiry.budget && (
                    <div className="flex items-start gap-3">
                      <DollarSign className="text-orange-500 mt-1 shrink-0" size={18} />
                      <div>
                        <p className="text-neutral-500 text-sm">Budget</p>
                        <p className="text-neutral-300">{enquiry.budget}</p>
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <p className="text-neutral-500 text-sm mb-2">Description</p>
                    <p className="text-neutral-300 bg-neutral-800/50 p-3 rounded text-sm line-clamp-3">
                      {enquiry.description}
                    </p>
                  </div>

                  {/* Business Info */}
                  {enquiry.business && (
                    <div>
                      <p className="text-neutral-500 text-sm mb-2">Business Name</p>
                      <p className="text-neutral-300">{enquiry.business}</p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-neutral-700 flex gap-3">
                  <a
                    href={`mailto:${enquiry.email}`}
                    className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm transition"
                  >
                    Reply
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEnquiries;
