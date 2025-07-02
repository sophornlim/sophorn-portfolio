import React from 'react';

const skills = [
  'PostgreSQL', 'DHIS2', 'Linux', 'Windows', 'Tomcat',
  'Webmin', 'React.js', 'Network Troubleshooting',
  'Custom Forms', 'System Optimization',
];

function Skills() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold text-cyan-400 mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div key={skill} className="bg-slate-700 py-4 px-2 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-slate-100 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

