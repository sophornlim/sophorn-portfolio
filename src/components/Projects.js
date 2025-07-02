import React from 'react';

const projects = [
  {
    name: 'DHIS2 Metadata Fixer',
    desc: 'Resolved backend form errors by aligning metadata compatibility for a national health deployment.',
    link: 'https://github.com/your-project-link',
  },
  {
    name: 'PostgreSQL Auto-Restore',
    desc: 'Automated restoration of large SQL dumps with encoding fix and performance tuning.',
    link: 'https://github.com/your-other-project',
  },
];

function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="bg-slate-700 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-slate-100 mb-2">{project.name}</h3>
            <p className="text-slate-300 mb-4">{project.desc}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;