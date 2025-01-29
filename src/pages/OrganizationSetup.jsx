// OrganizationSetup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function OrganizationSetup() {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });
  const [isFetching, setIsFetching] = useState(false);
  const navigate = useNavigate();

  const handleAutoFetch = async () => {
    if (!formData.websiteUrl) return;
    setIsFetching(true);
    // Simulate meta description fetch
    setTimeout(() => {
      setFormData((prev) => ({
        ...prev,
        description:
          "Dummy meta description extracted from website. This is a sample description for demonstration purposes.",
      }));
      setIsFetching(false);
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    navigate("/scraping-status");
  };

  return (
    <div className="w-[80vw] md:max-w-md mx-auto mt-20">
      <h1 className="text-xl md:text-2xl font-bold mb-6">
        Setup Your Organization
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Company Name</label>
          <input
            type="text"
            placeholder="Enter your company name"
            className="w-full p-2 border rounded"
            value={formData.companyName}
            onChange={(e) =>
              setFormData({ ...formData, companyName: e.target.value })
            }
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Website URL</label>
          <div className=" flex flex-col md:flex-row gap-2">
            <input
              type="url"
              className="flex-1 p-2 border rounded"
              placeholder="https://example.com"
              value={formData.websiteUrl}
              onChange={(e) =>
                setFormData({ ...formData, websiteUrl: e.target.value })
              }
              required
            />
            <button
              type="button"
              onClick={handleAutoFetch}
              disabled={isFetching}
              className="px-4 py-4 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
            >
              {isFetching ? "Fetching..." : "Auto-fetch"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded h-32"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
