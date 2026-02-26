import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white">
      <div className="text-2xl font-bold text-gray-800">FurniShop</div> 
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li><a href="#home" className="hover:text-teal-600">Home</a></li> 
        <li><a href="#about" className="hover:text-teal-600">About</a></li> 
        <li><a href="#features" className="hover:text-teal-600">Features</a></li> 
        <li><a href="#contact" className="hover:text-teal-600">Contact</a></li> 
      </ul>
      <button className="md:hidden text-gray-800">Menu</button>
    </nav>
  );
};

export default Navbar;