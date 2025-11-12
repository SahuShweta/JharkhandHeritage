import React from "react";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-b from-orange-100 to-green-100">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-green-800">
        Welcome to Jharkhand
      </h2>
      <p className="text-xl text-gray-700 mb-8">
        झारखंड में आपका स्वागत है — Experience the beauty and culture of Jharkhand
      </p>

      <div className="max-w-xl mx-auto bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-2xl p-6 shadow-xl">
        <h3 className="text-2xl font-semibold mb-2">Jharkhand Heritage Video</h3>
        <p className="text-sm mb-4">
          Discover the charm of Jharkhand through visuals and stories
        </p>
        <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100">
          ▶ Watch Video
        </button>
      </div>
    </section>
  );
};

export default Hero;