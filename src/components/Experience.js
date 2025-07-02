import React from 'react';

function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">Experience</h2>
      <div className="space-y-6 border-l border-slate-600 pl-6">
        <div>
          <h3 className="text-slate-100 font-semibold">Senior Data Manager – Health Org</h3>
          <p className="text-slate-400 text-sm">2022–Present</p>
          <p className="text-slate-300">Led PostgreSQL and DHIS2 deployments across multiple remote facilities, ensuring uptime and metadata consistency.</p>
        </div>
        <div>
          <h3 className="text-slate-100 font-semibold">System Administrator – NGO</h3>
          <p className="text-slate-400 text-sm">2019–2021</p>
          <p className="text-slate-300">Managed hybrid systems, automated backups, resolved OS-level bugs across Linux and Windows stacks.</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;