import React from 'react';
import sofa from "../assets/sofa.webp";

const Hero = () => {
  return (
    <section className="px-10 py-16 bg-gray-50 flex flex-col md:flex-row items-center gap-10">
      {/* Kolom Teks */}
      <div className="flex-1">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Creative Home Simplify Your Furniture {/* [cite: 6, 71] */}
        </h1>
        <p className="text-gray-500 mb-8 max-w-lg">
          Do i have consent to record this meeting gain location root-and-branch, review, nor game plan who's the god. {/* [cite: 8, 72] */}
        </p>
        <button className="bg-furni-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition">
          Shop Now {/* [cite: 9, 73] */}
        </button>

        {/* Statistik */}
        <div className="flex gap-10 mt-12">
          <div>
            <h3 className="text-2xl font-bold">7</h3> {/* [cite: 10, 74] */}
            <p className="text-sm text-gray-500">Year Experience</p> {/* [cite: 11, 76] */}
          </div>
          <div>
            <h3 className="text-2xl font-bold">2</h3> {/* [cite: 12, 75] */}
            <p className="text-sm text-gray-500">Opened in Country</p> {/* [cite: 12, 77] */}
          </div>
          <div>
            <h3 className="text-2xl font-bold">10k+</h3> {/* [cite: 13, 78] */}
            <p className="text-sm text-gray-500">Furniture Sold</p> {/* [cite: 14, 79] */}
          </div>
          <div>
            <h3 className="text-2xl font-bold">260+</h3> {/* [cite: 15, 80] */}
            <p className="text-sm text-gray-500">Variant Furniture</p> {/* [cite: 16, 80] */}
          </div>
        </div>
      </div>

      {/* Placeholder Gambar (Sesuai Layout Figma) */}
      <div className="flex-1 w-full h-96 bg-gray-300 rounded-3xl overflow-hidden shadow-xl">
        <img 
          src={sofa} 
          alt="Modern Furniture" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;