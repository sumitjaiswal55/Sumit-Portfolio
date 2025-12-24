import React from 'react';

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
  return (
    <section className="w-full px-10 py-20 w-full flex  justify-center bg-[#0c0d11] min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          
          <div className="rounded-2xl bg-[#ffffff14] p-8 shadow-lg text-white">
            <h2 className="mb-2 text-3xl font-bold">Let's work together!</h2>
            <p className="mb-8">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input type="text" placeholder="First name" className="w-full rounded-lg border border-black p-3 focus:border-purple-500 focus:ring-purple-500" />
                <input type="text" placeholder="Last name" className="w-full rounded-lg border border-black p-3 focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input type="email" placeholder="Email address" className="w-full rounded-lg border border-black p-3 focus:border-purple-500 focus:ring-purple-500" />
                <input type="tel" placeholder="Phone number" className="w-full rounded-lg border border-black p-3 focus:border-purple-500 focus:ring-purple-500" />
              </div>
              <div>
                <select className="w-full rounded-lg border border-black p-3 text-white focus:border-purple-500 focus:ring-purple-500 ">
                  <option className='bg-[#0c0d11]'>Please choose an option--</option>
                  <option className='bg-[#0c0d11]'>Web Design</option>
                  <option className='bg-[#0c0d11]'>Branding</option>
                  <option className='bg-[#0c0d11]'>Consultation</option>
                </select>
              </div>
              <div>
                <textarea placeholder="Message" rows="5" className="w-full rounded-lg border border-black p-3 focus:border-purple-500 focus:ring-purple-500"></textarea>
              </div>
              <div>
                <button type="submit" className="rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white transition-transform duration-300 hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-12 ">
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <PhoneIcon />
              </div>
              <div className='text-white'>
                <p className="font-semibold">Phone</p>
                <p className="text-xl font-bold">+91 7084525212</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <EmailIcon />
              </div>
              <div className='text-white'>
                <p className="font-semibold">Email</p>
                <p className="text-xl font-bold">sumitjaiswal7055@mail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <AddressIcon />
              </div>
              <div className='text-white'>
                <p className="font-semibold">Address</p>
                <p className="text-xl font-bold">Manewada Nagpur, <br/> Maharastra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
