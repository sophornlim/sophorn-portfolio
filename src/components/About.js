import React from 'react';

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 md:flex md:items-center md:space-x-12">
      <img
        src="/me.jpg"
        alt="Sophorn Lim"
        className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full mx-auto mb-8 md:mb-0 shadow-lg"
      />
      <div>
        <h2 className="text-3xl font-semibold text-cyan-400 mb-4">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          I’m <span className="text-cyan-300 font-medium">Sophorn Lim</span>, a meticulous and resilient problem-solver passionate about health informatics and data-driven systems. I specialize in PostgreSQL, DHIS2, network diagnostics, and full-stack system integration. My work spans Linux + Windows, cloud, and on-prem environments.
        </p>
      </div>
    </div>
  );
}

export default About;


