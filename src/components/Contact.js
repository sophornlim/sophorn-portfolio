import React from 'react';

function Contact() {
  return (
    <div className="max-w-lg mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-cyan-400 mb-6 text-center">Contact</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full bg-slate-700 rounded px-4 py-3 text-slate-100" />
        <input type="email" placeholder="Your Email" className="w-full bg-slate-700 rounded px-4 py-3 text-slate-100" />
        <textarea placeholder="Your Message" rows="5" className="w-full bg-slate-700 rounded px-4 py-3 text-slate-100" />
        <button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded font-semibold">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;

