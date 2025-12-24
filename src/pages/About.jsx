import profileImage from '../assets/sumit.jpg';
import { motion } from 'framer-motion';


// A simple CV icon for the button
const CvIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);

const About = () => {
    return (

        // Main section with your specified gradient background
        <motion.section
        className="relative flex min-h-screen flex-col-reverse items-center justify-between overflow-hidden px-10 py-20 md:flex-row w-full py-20 flex bg-[#0c0d11] min-h-screen ">


            <div className="mb-8 mt-8 flex justify-center md:w-1/3 md:mb-0">
                <img
                    src={profileImage}
                    alt="sumit_img"
                    className="w-80 rounded-2xl shadow-lg"
                />
            </div>

            <div className="container mx-auto text-center md:w-1/2 text-white md:text-left">
                <div className="flex flex-col items-center gap-y-6 md:items-start">

                    <p className="text-lg font-semibold">HI! —</p>

                    <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mt-6 mb-2">
                        About Me
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed">
                        I started my journey in tech with curiosity for how websites and apps are built. Over time, I explored both frontend and backend technologies, and kept learning by building different kinds of projects.

                        Currently, I focus on the MERN stack (MongoDB, Express, React, Node.js) for web development, and I am also exploring mobile app development to expand my skill set.

                        My goal is to gain real-world experience through an internship, work on impactful projects, and keep growing as a versatile developer.
                    </p>

                    <div className="grid w-full max-w-xl grid-cols-2 gap-x-8 gap-y-4 pt-4 text-left sm:grid-cols-3">
                        <div>
                            <strong className="block">Name:</strong>
                            <span className="">Sumit Jaiswal</span>
                        </div>
                        <div>
                            <strong className="block">Email:</strong>
                            <span className="text-xs">sumitjaiswal7055@gmail.com</span>
                        </div>
                        <div>
                            <strong className="block">Age:</strong>
                            <span className="">20 Years</span>
                        </div>
                        <div>
                            <strong className="block">Phone:</strong>
                            <span className="">+91 7084525212</span>
                        </div>
                        <div>
                            <strong className="block">Role:</strong>
                            <span className="">Student</span>
                        </div>
                        <div>
                            <strong className="block">From:</strong>
                            <span className="">India</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 pt-6 sm:flex-row">
                        <button className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105">
                            <CvIcon />
                            My CV
                        </button>
                        <button className="rounded-full border-2 border-teal-500 px-8 py-3 text-base font-semibold text-purple-600 transition-transform duration-200 hover:scale-105 hover:bg-teal-500 hover:text-white">
                            Hire Now
                        </button>
                    </div>
                </div>
            </div>


        </motion.section>
    );
}

export default About;