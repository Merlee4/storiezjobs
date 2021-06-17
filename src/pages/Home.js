import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import JobsList from "../components/JobsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function Home({ jobs, match }) {
  const router = useHistory();
  const RecentJobs = () => {
    return (
      <div className="mx-auto">
        {jobs.length > 0 ? (
          <JobsList jobs={jobs.slice(1, 5)} />
        ) : (
          <h1 className="font-thin text-gray-700">
            There are not jobs at the moment
          </h1>
        )}
      </div>
    );
  };

  useEffect(() => {
    //get search working
    console.log(router.location);
  }, [router]);

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500">
        <NavBar />
        <Header jobs={jobs.length} />
      </div>
      {/* Main */}
      <div className="w-8/12 mx-auto">
        <Card />
        <div className="mt-10 bg-white p-2 rounded-sm">
          <div className="flex gap-4  border-b mb-4">
            <h1 className="border rounded py-2 px-3 my-5 font-medium text-blue-700">
              RECENT JOBS
            </h1>
          </div>
          <div className="flex flex-col">
            <div>
              <RecentJobs />
            </div>
            {jobs.length > 0 && (
              <button
                className="my-4 hover:text-gray-500 transition duration-150"
                onClick={() => router.push("/jobs")}
              >
                See More <b>{jobs.length - jobs.slice(1, 5).length}+</b>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
