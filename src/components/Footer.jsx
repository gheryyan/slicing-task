import React, { useState } from 'react';
import { sanitizeInput, validateEmail } from '../utils/sanitize';

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const cleanEmail = sanitizeInput(email); 
    
    if (!validateEmail(cleanEmail)) {
      alert("Format email tidak valid!");
      return;
    }
    
    alert(`Terima kasih! Diskon akan dikirim ke ${cleanEmail}`);
    setEmail("");
  };

  return (
    <footer className="bg-furni-teal text-white py-16 px-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get More Discount Off <br/> Your Order</h2>
          <p className="opacity-80">Join our mailing list</p>
        </div>
        
        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Your email address" 
            className="px-6 py-3 rounded-l-lg text-gray-800 outline-none w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-black text-white px-8 py-3 rounded-r-lg font-bold">
            Shop Now
          </button>
        </form>
      </div>
      <div className="mt-16 pt-8 border-t border-gray-500 text-center opacity-60">
        © 2024 FurniShop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;