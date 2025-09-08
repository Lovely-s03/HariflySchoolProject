import React from "react";

const features = [
  {
    title: "Library",
    description: "Access all your free study material here",
    icon: "📚",
  },
  {
    title: "Ask Doubt",
    description: "Upload image and get instant doubt resolution",
    icon: "❓",
  },
  {
    title: "Ask Concept",
    description: "Short conceptual videos of your favourite topics",
    icon: "💡",
  },
  {
    title: "Planner",
    description: "Organise your preparation and get a step ahead",
    icon: "📅",
  },
  {
    title: "Mentorship",
    description: "Get free guidance from PW Alumni and Toppers",
    icon: "🤝",
  },
  {
    title: "Saarthi",
    description: "Instant live doubt-solving platform for all your doubts",
    icon: "💬",
  },
];

const Features = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-10 bg-white shadow-md rounded-lg pb-7">
      {/* Heading */}
      <div className="mb-8 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900">Explore</h2>
        <p className="text-gray-600 mt-2">
          Get additional guidance with these features
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
