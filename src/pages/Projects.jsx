import React from "react";

const portfolioData = [
  {
    category: "AI & Research",
    title: "Crimeta: Geospatial Crime Reporting",
    description:
      "A real-time platform for community crime reporting using geospatial data to enhance police-citizen transparency. Published in American Journal.",
    imageUrl: "https://placehold.co/600x400/f59e0b/ffffff?text=Deloitte",
    btn1: "",
    btn2: "",
    hoverDescription:
      "Tech: React, Node.js, GIS Mapping, Machine Learning integration.",
  },
  {
    category: "FullStack Web",
    title: "InvestDeck (Zerodha Clone)",
    description:
      "High-performance trading platform featuring real-time stock data visualization, dashboard analytics, and order management simulation.",
    imageUrl:
      "https://placehold.co/600x400/0f172a/ffffff?text=Grow+Your+Business",
    btn1: "",
    btn2: "",
    hoverDescription:
      "Tech: MERN Stack, Chart.js, WebSockets for real-time data.",
  },
  {
    category: "GenAI & API",
    title: "AI Conversationalist (ChatGPT Clone)",
    description:
      "An intelligent chat interface integrating OpenAI API for natural language processing, code generation, and context-aware responses.",
    imageUrl: "https://placehold.co/600x400/10b981/ffffff?text=AI+Chat+Bot",
    btn1: "",
    btn2: "",
    hoverDescription: "Tech: React, Node.js, OpenAI API, Stream Handling.",
  },
  {
    category: "Real-time App",
    title: "ConnectHub (Zoom Clone)",
    description:
      "Seamless video conferencing application supporting peer-to-peer connection, screen sharing, and low-latency real-time communication.",
    imageUrl:
      "https://placehold.co/600x400/2563eb/ffffff?text=Video+Conferencing",
    btn1: "",
    btn2: "",
    hoverDescription: "Tech: WebRTC, Socket.io, React, Node.js PeerJS.",
  },
  {
    category: "Client Project",
    title: "SK Investments Finance",
    description:
      "A professional finance portfolio website designed for client management, investment tracking, and business outreach.",
    imageUrl: "https://placehold.co/600x400/f59e0b/000000?text=SK+Investments",
    btn1: "",
    btn2: "",
    hoverDescription: "Tech: React, Tailwind CSS, Vercel Deployment.",
  },
  {
    category: "FullStack Web",
    title: "StayFinder (Airbnb Clone)",
    description:
      "Comprehensive booking platform with map search, property listings, user reviews, and secure payment gateway integration.",
    imageUrl:
      "https://placehold.co/600x400/0f172a/ffffff?text=Grow+Your+Business",
    btn1: "",
    btn2: "",
    hoverDescription: "Tech: MERN Stack, Mapbox, Stripe Payment Gateway.",
  },
  {
    category: "Security & Backend",
    title: "SecureNotes (RBAC System)",
    description:
      "Secure note-taking application implementing Role-Based Access Control (RBAC) to manage permissions for admins and standard users.",
    imageUrl: "https://placehold.co/600x400/6366f1/ffffff?text=Secure+RBAC",
    btn1: "",
    btn2: "",
    hoverDescription: "Tech: JWT Auth, Bcrypt, Node.js, MongoDB.",
  },
  {
    category: "Frontend",
    title: "Personal Developer Portfolio",
    description:
      "A dark-themed, high-performance portfolio website showcasing skills and projects with advanced CSS animations and responsiveness.",
    imageUrl:
      "https://placehold.co/600x400/0f172a/ffffff?text=Grow+Your+Business",
    btn1: "",
    btn2: "",
    hoverDescription: "Tech: React, Tailwind CSS, Framer Motion.",
  },
];

const Projects = () => {
  return (
    <section className="flex items-center justify-between bg-[#0c0d11] min-h-screen gap-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 px-6 py-8 text-white ">
        {portfolioData.map((link, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-[10px] bg-[#141414e6] p-4 shadow-[0_0_4px_rgba(59,130,246,0.7)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]"
          >
            <img src={link.imageUrl} className="rounded-[10px]"></img>
            <h1 className="text-[20px] font-bold">{link.title}</h1>
            <p>{link.description}</p>
            <p className="font-bold">{link.hoverDescription}</p>
            <span>Category : {link.category}</span>
            <div className="flex gap-3 flex-end jsutify-evenly">
              <button className="bg-transparent border-[1px] border-gray-500 px-6 py-2 rounded-[10px] cursor-pointer ">
                Code
              </button>
              <button className="bg-gray-900/50 px-6 py-2 rounded-[10px] cursor-pointer">
                Link
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
