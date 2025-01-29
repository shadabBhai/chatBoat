import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dummyPages = [
  {
    url: "/home",
    status: "scraped",
    content: ["Content chunk 1", "Content chunk 2"],
  },
  { url: "/about", status: "pending", content: ["test 01", "test 02"] },
  { url: "/contact", status: "failed", content: [] },
];

export function ScrapingStatus() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [pages, setPages] = useState(dummyPages);
  const navigate = useNavigate();

  // Simulate status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPages((prevPages) =>
        prevPages.map((page) =>
          page.status === "pending" && Math.random() * 10 > 0.5
            ? { ...page, status: "scraped" }
            : page
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update selectedPage when the pages state changes
  useEffect(() => {
    if (selectedPage) {
      const updatedPage = pages.find((p) => p.url === selectedPage.url);
      if (updatedPage && updatedPage.status !== selectedPage.status) {
        setSelectedPage(updatedPage);
      }
    }
  }, [pages, selectedPage]);

  return (
    <div className="w-[80vw] mt-10 mx-[10vw] ">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar for detected pages */}
        <div className="w-[80vw] lg:w-1/2 lg:border-r pr-4">
          <h2 className="text-lg font-semibold mb-4">Detected Pages</h2>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li
                key={page.url}
                className={`p-2 rounded cursor-pointer ${
                  selectedPage?.url === page.url ? "bg-blue-50" : ""
                }`}
                onClick={() => setSelectedPage(page)}
              >
                <div className="flex justify-between items-center">
                  <span>{page.url}</span>
                  <span
                    className={`text-sm px-2 rounded ${
                      page.status === "scraped"
                        ? "bg-green-100 text-green-800"
                        : page.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {page.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Section */}
        <div className="w-[75vw] md:w-[77vw] lg:w-2/3">
          <h2 className="text-lg font-semibold mb-4">Scraped Content</h2>
          {selectedPage ? (
            <div className="space-y-3">
              {selectedPage.status === "scraped" ? (
                selectedPage.content.map((chunk, index) => (
                  <div key={index} className="p-3 border rounded bg-gray-50">
                    {chunk}
                  </div>
                ))
              ) : (
                <p className="text-yellow-600">
                  Page is still in <b>{selectedPage.status}</b> status.
                </p>
              )}
            </div>
          ) : (
            <p className="text-gray-500">Select a page to view content</p>
          )}
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center items-center lg:justify-normal">
        <button
          onClick={() => navigate("/integration")}
          className="mt-8 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Continue to Integration
        </button>
      </div>
    </div>
  );
}
