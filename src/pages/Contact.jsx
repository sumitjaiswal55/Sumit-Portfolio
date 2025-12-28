import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { Toaster, toast } from 'react-hot-toast'; // Optional: For nice alerts

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const AddressIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // Email Send Logic
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // ⚠️ IMPORTANT: Replace these IDs with your actual EmailJS credentials
    // Create account at https://www.emailjs.com/ (Free hai)
    // 1. Service ID
    // 2. Template ID
    // 3. Public Key
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID',     // Replace this
      'YOUR_TEMPLATE_ID',    // Replace this
      form.current,
      'YOUR_PUBLIC_KEY'      // Replace this
    )
    .then((result) => {
      console.log(result.text);
      setLoading(false);
      alert("Message Sent Successfully!"); // Ya toast use karo
      e.target.reset(); // Form clear kar do
    }, (error) => {
      console.log(error.text);
      setLoading(false);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section className="w-full flex justify-center bg-[#0c0d11] min-h-screen py-12 px-4 md:px-10 md:py-20 bg-[radial-gradient(circle_at_50%_0%,_rgba(6,182,212,0.1)_0%,_rgba(0,0,0,1)_100%)]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* --- LEFT SIDE: FORM --- */}
          <div className="rounded-2xl bg-white/5 p-6 md:p-8 shadow-lg text-white backdrop-blur-sm border border-white/10">
            <h2 className="mb-2 text-2xl md:text-3xl font-bold text-center md:text-left">
              Let's <span className="text-cyan-400">work together!</span>
            </h2>
            <p className="mb-8 text-gray-400 text-sm md:text-base text-center md:text-left">
              I design and code beautifully simple things and I love what I do. Just simple like that!
            </p>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                {/* Inputs Dark Mode with Cyan Focus */}
                <input 
                  type="text" name="first_name" placeholder="First name" required
                  className="w-full rounded-lg bg-black/40 text-white border border-white/10 p-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-500" 
                />
                <input 
                  type="text" name="last_name" placeholder="Last name" required
                  className="w-full rounded-lg bg-black/40 text-white border border-white/10 p-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-500" 
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                <input 
                  type="email" name="user_email" placeholder="Email address" required
                  className="w-full rounded-lg bg-black/40 text-white border border-white/10 p-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-500" 
                />
                <input 
                  type="tel" name="phone_number" placeholder="Phone number"
                  className="w-full rounded-lg bg-black/40 text-white border border-white/10 p-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-500" 
                />
              </div>

              <div>
                <select name="service_type" className="w-full rounded-lg bg-black/40 text-gray-300 border border-white/10 p-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 cursor-pointer">
                  <option value="" disabled selected>Please choose an option</option>
                  <option value="Web Development" className="bg-black">Web Development</option>
                  <option value="MERN Stack" className="bg-black">MERN Stack Project</option>
                  <option value="Mobile App" className="bg-black">Mobile App (React Native)</option>
                  <option value="Freelance" className="bg-black">Freelance Work</option>
                </select>
              </div>

              <div>
                <textarea 
                  name="message" placeholder="Message" rows="5" required
                  className="w-full rounded-lg bg-black/40 text-white border border-white/10 p-3 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-gray-500"
                ></textarea>
              </div>

              <div>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* --- RIGHT SIDE: CONTACT INFO --- */}
          <div className="flex flex-col justify-center gap-8 md:gap-12 px-4 md:px-0">
            
            {/* Phone */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 shadow-md">
                <PhoneIcon />
              </div>
              <div className='text-white'>
                <p className="font-semibold text-gray-400 text-sm md:text-base">Phone</p>
                <p className="text-lg md:text-xl font-bold">+91 7084525212</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 shadow-md">
                <EmailIcon />
              </div>
              <div className='text-white min-w-0'>
                <p className="font-semibold text-gray-400 text-sm md:text-base">Email</p>
                <p className="text-base md:text-xl font-bold break-all">sumitjaiswal7055@mail.com</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex h-12 w-12 md:h-16 md:w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 shadow-md">
                <AddressIcon />
              </div>
              <div className='text-white'>
                <p className="font-semibold text-gray-400 text-sm md:text-base">Address</p>
                <p className="text-lg md:text-xl font-bold">Manewada Nagpur, <br/> Maharastra, India</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;