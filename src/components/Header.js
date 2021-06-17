import React from "react";

function Header({ jobs }) {
  return (
    <div className="flex flex-col text-white p-32 items-start">
      <h1 className="text-3xl font-medium">
        {jobs} {jobs > 1 && "jobs"} {jobs === 0 && "jobs"} {jobs === 1 && "job"}{" "}
        Listed
      </h1>
      <small className="mt-1 w-96">
        Create a free account to find hundreds of jobs & carrer opportunities{" "}
      </small>
      <button
        onClick={() => (window.location = "/")}
        className="my-4 py-3 px-5 bg-blue-200 bg-opacity-30 text-sm font-medium rounded hover:bg-opacity-50 transition duration-150 ease-in-out"
      >
        REFRESH PAGE
      </button>
    </div>
  );
}

export default Header;
