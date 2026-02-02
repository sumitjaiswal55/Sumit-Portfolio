import React from "react";
import agribridge from "../../src/assets/agribridge.png";
import crimeta from "../../src/assets/crimeta.png";
import stayspot from "../../src/assets/stayspot.png";
import meetflow from "../../src/assets/meetflow.png";
import skinvest from "../../src/assets/skinvestment.png";
// import investdeck from "../../src/assets/investdeck.png"

const portfolioData = [
  {
    category: "FullStack Web",
    title: "AgriBridge (Farmer B2B)",
    description:
      "B2B Supply Chain platform connecting farmers directly with hotels/restaurants using geospatial logic.",
    imageUrl: agribridge,
    btn1: "github.com/sumitjaiswal55/Agri-Bridge",
    btn2: "agribridge.sumitjaiswal.in",
    hoverDescription: "MERN Stack, Geospatial Queries, JWT",
  },
  {
    category: "AI & Research",
    title: "Crimeta: Geospatial Crime Reporting",
    description:
      "A real-time platform for community crime reporting using geospatial data to enhance police-citizen transparency.",
    imageUrl: crimeta,
    btn1: "https://github.com/crimeta2025-design/project/",
    btn2: "crimeta.onrender.com",
    hoverDescription: "React, Node.js, GIS Mapping, ML",
  },

  {
    category: "FullStack Web",
    title: "StaySpot",
    description:
      "B2B Supply Chain platform connecting farmers directly with hotels/restaurants using geospatial logic.",
    imageUrl: stayspot,
    btn1: "https://github.com/sumitjaiswal55/StaySpot",
    btn2: "wunderlust-i9vy.onrender.com/",
    hoverDescription: "MERN Stack, Geospatial Queries, JWT",
  },
  {
    category: "GenAI & API",
    title: "Aivon",
    description:
      "An intelligent chat interface integrating OpenAI API for natural language processing and context-aware responses.",
    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=Aivon",
    btn1: "#",
    btn2: "#",
    hoverDescription: "React, Node.js, OpenAI API",
  },
  {
    category: "Real-time App",
    title: "Meetly",
    description:
      "Seamless video conferencing application supporting peer-to-peer connection and screen sharing.",
    imageUrl: meetflow,
    btn1: "#",
    btn2: "#",
    hoverDescription: "WebRTC, Socket.io, React, PeerJS",
  },
  {
    category: "Client Project",
    title: "SK Investments Finance",
    description:
      "A professional finance portfolio website designed for client management and investment tracking.",
    imageUrl: skinvest,
    btn1: "#",
    btn2: "sk-investment.in/",
    hoverDescription: "React, Tailwind CSS, Vercel",
  },
  {
    category: "FullStack Web",
    title: "InvestDeck (Zerodha Clone)",
    description:
      "High-performance trading platform featuring real-time stock data visualization and dashboard analytics.",
    imageUrl: "https://placehold.co/600x400/0f172a/ffffff?text=Trading+App",
    btn1: "#",
    btn2: "#",
    hoverDescription: "MERN Stack, WebSockets, Chart.js",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen bg-[#0c0d11] bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.15)_0%,_rgba(0,0,0,1)_100%)] px-4 py-20 flex justify-center">
      <div className="container mx-auto">
        {/* --- HEADING (Blue-Cyan Gradient) --- */}
        <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
              Projects
            </span>
          </h1>
          {/* Underline Bar */}
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl h-48 mb-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge (Blue) */}
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-blue-500/30">
                  <span className="text-xs font-semibold text-cyan-400">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-auto mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                    Tech Stack
                  </p>
                  <p className="text-sm font-medium text-blue-200">
                    {project.hoverDescription}
                  </p>
                </div>

                {/* Buttons (No Purple) */}
                <div className="flex gap-4 mt-auto">
                  <button
                    onClick={() =>
                      window.open(`https://${project.btn1}`, "_blank")
                    }
                    className="flex-1 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 font-medium hover:bg-cyan-500/10 hover:border-cyan-400 transition-all text-sm"
                  >
                    View Code
                  </button>
                  <button
                    onClick={() =>
                      window.open(`https://${project.btn2}`, "_blank")
                    }
                    className="flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all text-sm"
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
