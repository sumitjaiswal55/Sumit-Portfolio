import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaAward } from "react-icons/fa";

const Certification = () => {
  const certificates = [
    {
      id: 1,
      title: "FullStack Web Development",
      issuer: "Apna College",
      date: "2024",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/v1764318198/sumit-dev_o2f5hn.jpg",
    },
    {
      id: 2,
      title: "Data Structures & Algorithms",
      issuer: "Apna College",
      date: "2024",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/v1764318367/sumit-dsa_tfkrcc.jpg",
    },
    {
      id: 3,
      title: "Project Competition Winner",
      issuer: "GHRCEM (GHRIETN)",
      date: "2023",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/w_800,c_fit/v1757827520/certificate_jg3rh3.jpg",
    },
    {
      id: 4,
      title: "Code Leauge 1.0 Hackathon",
      issuer: "GHRCEM (GHRIETN)",
      date: "2026",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/v1770648440/hackathon_bsooqc.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-Slide Logic (Optional: Hata sakte ho agar nahi chahiye)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? certificates.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === certificates.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="w-full min-h-screen bg-[#0c0d11] bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.15)_0%,_rgba(0,0,0,1)_100%)] py-20 flex flex-col items-center justify-center overflow-hidden px-4">
      
      {/* --- HEADING --- */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            Certifications
          </span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mb-6"></div>
        <p className="text-gray-400 max-w-lg">
          Validating my skills and dedication through recognized achievements.
        </p>
      </div>
      
      {/* --- SLIDER CONTAINER --- */}
      <div className="relative w-full max-w-5xl group">
        
        {/* Main Card Frame with Glow */}
        <div className="relative overflow-hidden rounded-2xl bg-[#121212] border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.1)] backdrop-blur-sm">
          
          {/* Images Strip */}
          <div 
            className="flex transition-transform ease-out duration-700" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {certificates.map((cert) => (
              <div key={cert.id} className="min-w-full flex flex-col md:flex-row h-auto md:h-[500px]">
                
                {/* Image Section (Dark Background for contrast) */}
                <div className="w-full md:w-2/3 h-[300px] md:h-full bg-black/50 flex items-center justify-center p-4 relative">
                   {/* Background blur image for ambience */}
                   <img 
                      src={cert.imageUrl} 
                      alt="blur-bg" 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 blur-xl"
                   />
                   {/* Main Image */}
                   <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="relative w-full h-full object-contain z-10 shadow-2xl rounded-lg border border-white/5" 
                  />
                </div>

                {/* Info Section (Right Side on Desktop, Bottom on Mobile) */}
                <div className="w-full md:w-1/3 bg-[#181818] p-8 flex flex-col justify-center border-l border-white/5 relative">
                  
                  {/* Decorative Icon */}
                  <div className="absolute top-6 right-6 text-cyan-500/10">
                    <FaAward size={120} />
                  </div>

                  <div className="relative z-10">
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-cyan-400 uppercase bg-cyan-900/20 rounded-full border border-cyan-500/20">
                      Verified
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {cert.title}
                    </h3>
                    
                    <div className="h-1 w-12 bg-blue-600 rounded-full mb-6"></div>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-500 text-sm uppercase tracking-wide">Issued By</p>
                        <p className="text-gray-300 font-medium text-lg">{cert.issuer}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm uppercase tracking-wide">Year</p>
                        <p className="text-gray-300 font-medium">{cert.date || "2024"}</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* --- CONTROLS --- */}
          
          {/* Left Arrow */}
          <button 
            onClick={handlePrev} 
            className="absolute top-1/2 left-4 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
          >
            <FaChevronLeft size={20} />
          </button>
          
          {/* Right Arrow */}
          <button 
            onClick={handleNext} 
            className="absolute top-1/2 right-4 -translate-y-1/2 z-20 p-3 rounded-full bg-black/50 border border-white/10 text-white hover:bg-cyan-500 hover:border-cyan-500 hover:text-black transition-all duration-300 backdrop-blur-md opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-cyan-400 w-8" 
                    : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certification;