import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-green-700 to-orange-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">Jharkhand Heritage</h1>
      <ul className="flex gap-6 text-sm md:text-base">
        <li className="hover:underline cursor-pointer">Home</li>
        <li className="hover:underline cursor-pointer">Tourist Places</li>
        <li className="hover:underline cursor-pointer">Handicrafts</li>
        <li className="hover:underline cursor-pointer">Culture</li>
        <li className="hover:underline cursor-pointer">Spiritual</li>
      </ul>
    </nav>
  );
};

export default Navbar;