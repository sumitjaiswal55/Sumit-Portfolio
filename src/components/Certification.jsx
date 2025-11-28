import React, { useState } from "react";

const ArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Certification = () => {
  const certificates = [
    {
      id: 1,
      title: "FullStack Web Development",
      issuer: "Apna College",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/v1764318198/sumit-dev_o2f5hn.jpg",
    },
    {
      id: 2,
      title: "Data Structures Algorithm",
      issuer: "Apna College",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/v1764318367/sumit-dsa_tfkrcc.jpg",
    },
    {
      id: 3,
      title: "Project Competition",
      issuer: "GHRCEM (GHRIETN)",
      imageUrl: "https://res.cloudinary.com/dtnkygknq/image/upload/w_800,c_fit/v1757827520/certificate_jg3rh3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
    <div>
      <section className="w-full py-20">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mt-6 mb-2">
            My Certifications
          </h2>
          
          {/* --- Certificate Slider --- */}
          <div className="relative w-full max-w-4xl">
            {/* Left Arrow */}
            <button 
              onClick={handlePrev} 
              className="absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
              aria-label="Previous Certificate"
            >
              <ArrowLeft />
            </button>
            
            {/* Certificate Content */}
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div 
                className="flex transition-transform ease-out duration-500" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {/* Certificates Section*/}
                {certificates.map((cert) => (
                  <div key={cert.id} className="min-w-full flex-shrink-0">
                    <img 
                      src={cert.imageUrl} 
                      alt={cert.title} 
                      className="w-full object-cover"
                    />
                    <div className="bg-white p-4">
                      <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                      <p className="text-md text-gray-600 mt-1">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={handleNext} 
              className="absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
              aria-label="Next Certificate"
            >
              <ArrowRight />
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Certification;