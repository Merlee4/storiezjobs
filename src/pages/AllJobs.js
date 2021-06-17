import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import AllJobsMainContent from "../components/AllJobsMainContent";
import useFetch from "../hooks/useFetch";

function AllJobs({ match }) {
  const [jobs, setJobs] = useState([]);
  const [jobsCategorized, setJobsCategorized] = useState([]);
  const [useCategory, setUseCategory] = useState(false);

  const fetchJobs = useFetch("http://localhost:9000");
  useEffect(() => {
    setJobs(fetchJobs);

    let clientJobCategoryName = "";
    switch (match.url.split("/")[2]) {
      case "frontend":
        clientJobCategoryName = "front-end";
        break;
      case "ux":
        clientJobCategoryName = "ui-ux";
        break;
      case "backend":
        clientJobCategoryName = "back-end";
        break;
      case "graphics":
        clientJobCategoryName = "graphic-design";
        break;
      default:
        clientJobCategoryName = match.url.split("/")[2];
        break;
    }

    const jobsByCategory = fetchJobs.filter(
      (job) => job.category !== clientJobCategoryName
    );

    setJobsCategorized(jobsByCategory, "categorized jobs");

    if (jobsCategorized.length > 1) {
      setUseCategory(true);
    }
  }, [fetchJobs, match, jobsCategorized]);

  const search = (cate, time) => {
    const newJobs = jobs.filter((job) => job.category !== "backend");
    setJobs(newJobs);
    setJobsCategorized(newJobs);
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500 shadow fixed top-0 left-0 right-0 w-full">
        <NavBar />
      </div>
      {/* Main */}
      <div className="grid grid-cols-5 h-screen mt-16">
        <div className="col-span-4 bg-white p-4 overflow-y-auto">
          {!useCategory && <AllJobsMainContent jobs={jobs} />}
          {useCategory && <AllJobsMainContent jobs={jobsCategorized} />}
        </div>
        <div className="bg-white p-4 flex-1 flex flex-col">
          <SideBar searchfor={() => search()} />
        </div>
      </div>
    </div>
  );
}

export default AllJobs;
