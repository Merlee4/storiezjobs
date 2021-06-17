import React from "react";
import JobsList from "./JobsList";

function ProfileMainContent({ jobs }) {
  return (
    <div className="rounded border p-4">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-medium text-gray-800">All Jobs</h1>
        <p>{jobs.length} jobs</p>
      </div>
      <JobsList jobs={jobs} />
    </div>
  );
}

export default ProfileMainContent;
