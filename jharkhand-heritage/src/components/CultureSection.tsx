import React from "react";

const CultureSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
        Jharkhand - Land of Forests
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/assets/forest.jpg"
          alt="Jharkhand forest"
          className="rounded-2xl shadow-lg"
        />
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Jharkhand, the "Land of Forests", is known for its rich culture,
            tribal traditions, and breathtaking natural beauty. Its art,
            handicrafts, music, and festivals reflect the spirit of its people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;