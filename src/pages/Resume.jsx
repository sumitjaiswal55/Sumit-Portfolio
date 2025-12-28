import React from "react";
import { FaBriefcase, FaGraduationCap, FaDownload, FaEye } from "react-icons/fa";
import resume from "../assets/resume.pdf"; 

// --- DATA SECTION ---
const experienceData = [
  {
    id: 1,
    date: "2025 - Present",
    role: "Full Stack Developer Intern",
    company: "Cybrainyx Technologies", // Updated based on your profile context
    desc: "Working on live projects using MERN Stack and React Native.",
  },
  {
    id: 2,
    date: "2022 - Present",
    role: "Freelance Developer",
    company: "Remote / Self-Employed",
    desc: "Built various websites like Portfolio, Crimeta, and AgriBridge.",
  },
];

const educationData = [
  {
    id: 1,
    date: "2023 - 2026",
    course: "Bachelor of Computer Applications",
    university: "GHRCEMN, Nagpur",
    grade: "CGPA: 8.23",
  },
  {
    id: 2,
    date: "2024 - 2025",
    course: "Full Stack Web Development",
    university: "Apna College",
    grade: "Certified",
  },
  {
    id: 3,
    date: "2021 - 2023",
    course: "Senior Secondary (12th)",
    university: "TNIC",
    grade: "63.2%",
  },
];

const Resume = () => {
  return (
    <section className="w-full min-h-screen bg-[#0c0d11] bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.15)_0%,_rgba(0,0,0,1)_100%)] text-white py-20 px-4 md:px-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADING --- */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">Resume</span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-lg">
            A summary of my professional journey and academic background.
          </p>
        </div>

        {/* --- GRID: EXPERIENCE & EDUCATION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* LEFT: EDUCATION (Blue Theme) */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20">
                <FaGraduationCap size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
            </div>
            
            <div className="space-y-6 border-l-2 border-blue-500/20 pl-6 ml-4">
              {educationData.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Dot on Timeline */}
                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-[#0c0d11] border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></span>
                  
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300">
                    <span className="text-sm font-semibold text-blue-400 tracking-wide">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.course}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.university}</p>
                    {item.grade && (
                      <span className="inline-block mt-3 px-3 py-1 rounded-md bg-blue-500/10 text-blue-300 text-xs font-medium border border-blue-500/20">
                        {item.grade}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: EXPERIENCE (Cyan Theme) */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <FaBriefcase size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
            </div>
            
            <div className="space-y-6 border-l-2 border-cyan-500/20 pl-6 ml-4">
              {experienceData.map((item) => (
                <div key={item.id} className="relative group">
                  {/* Dot on Timeline */}
                  <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-[#0c0d11] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors"></span>
                  
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
                    <span className="text-sm font-semibold text-cyan-400 tracking-wide">{item.date}</span>
                    <h3 className="text-xl font-bold text-white mt-1">{item.role}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.company}</p>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        
        </div>

        {/* --- PDF VIEWER SECTION --- */}
        <div className="flex flex-col items-center justify-center pt-10 border-t border-white/10">
          
          <div className="flex gap-4 mb-8">
             {/* Download Button */}
            <a 
              href={resume} 
              download="Sumit_Jaiswal_Resume.pdf"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-500/40 hover:scale-105 transition-all"
            >
              <FaDownload /> Download CV
            </a>
            
             {/* View Button (for mobile fallback) */}
             <a 
              href={resume} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:border-white text-white font-semibold transition-all"
            >
              <FaEye /> View Fullscreen
            </a>
          </div>

          {/* Iframe Container */}
          <div className="w-full max-w-5xl h-[500px] md:h-[800px] bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl border border-white/10 relative group">
            
            {/* Loading/Fallback Text behind iframe */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 z-0">
              <p>Loading Resume Preview...</p>
            </div>

            <iframe 
              src={`${resume}#toolbar=0&navpanes=0&scrollbar=0`}
              title="My Resume"
              className="w-full h-full relative z-10"
              style={{ border: 'none' }}
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Resume;