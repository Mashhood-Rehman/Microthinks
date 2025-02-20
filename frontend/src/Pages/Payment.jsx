import { useState } from "react";

export default function Payment() {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details:", { email, cardNumber, expiryDate, cvv });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#1f2456]">
      <div className="max-w-md mx-auto   p-6 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semibold mb-4">Payment Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Expiry Date:</label>
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">CVV:</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
}
