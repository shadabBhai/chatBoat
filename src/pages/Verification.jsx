// Verification.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Verification() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    if (!timeLeft) return;
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add verification logic here
    navigate("/setup-org");
  };

  const handleResend = () => {
    setTimeLeft(30);
    // Add resend logic here
  };

  return (
    <div className=" w-[80vw] md:max-w-md mx-auto mt-20">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Verify Email</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Enter 6-digit code"
            className="w-48 text-center p-2 border rounded tracking-widest cursor-pointer"
            value={code}
            onChange={(e) =>
              setCode(e.target.value.replace(/\D/, "").slice(0, 6))
            }
            pattern="\d{6}"
            required
          />
          <div className="mt-4 text-sm text-gray-500">
            {timeLeft > 0 ? (
              `Resend code in ${timeLeft}s`
            ) : (
              <button
                type="button"
                onClick={handleResend}
                className="text-blue-600 hover:text-blue-700 cursor-pointer"
              >
                Resend Code
              </button>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
}
