import React from "react";

// Experience Icon (Medal/Badge)
const ExperienceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-600"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

// Education Icon (Graduation Cap)
const EducationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-purple-600"
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"></path>
  </svg>
);

// Data for the sections to keep the component clean
const experienceData = [
  {
    date: "2022 - Present",
    role: "LEAD DEVELOPER",
    company: "Blockdots, London",
  },
  {
    date: "2021 - 2022",
    role: "FULL STACK WEB DEVELOPER",
    company: "Parsons, The New School",
  },
  {
    date: "2020 - 2021",
    role: "UI DESIGNER",
    company: "House of Life, Leeds",
  },
];

const educationData = [
  {
    date: "2024- 2025",
    course: "Web Development Course",
    university: "Apna College",
    CGPA: "",
  },
  {
    date: "2023 - 2026",
    course: "Bachelor of Computer Applications",
    university: "GHRCEMN",
    CGPA: "CGPA- 8.23",
  },
  {
    date: "2021-2023",
    course: "Senior Secondary",
    university: "TNIC",
    CGPA: "63.2%"
  },
];

const Skills = () => {
  return (
    <section className="w-full px-10 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left Column: My Experience */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <ExperienceIcon />
              <h2 className="text-3xl font-bold text-gray-800">
                My Experience
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              {/* Mapping through experience data to create cards */}
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="space-y-2 rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <p className="font-semibold text-purple-600">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.role}
                  </h3>
                  <p className="text-gray-500">{item.company}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: My Education */}
          <div>
            <div className="mb-10 flex items-center gap-4">
              <EducationIcon />
              <h2 className="text-3xl font-bold text-gray-800">My Education</h2>
            </div>
            <div className="flex flex-col gap-8">
              {/* Mapping through education data to create cards */}
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="space-y-2 rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <p className="font-semibold text-purple-600">{item.date}</p>

                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-black-900">
                      {item.course}
                    </h3>

                    {/* Yeh check karega ki CGPA hai ya nahi, tabhi dikhayega */}
                    {item.CGPA && (
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.CGPA}
                      </h3>
                    )}
                  </div>

                  <p className="text-gray-500">{item.university}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
