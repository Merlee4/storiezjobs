import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import JobsList from "../components/JobsList";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

function Home() {
  const [jobs, setJobs] = useState([]);
  const router = useHistory();

  useEffect(() => {
    axios.get("http://localhost:9000").then((res) => {
      setJobs(res.data);
      console.log("datar", { msg: res.data });
    });
  }, []);

  const RecentJobs = ({ jobs }) => {
    return (
      <div className="mx-auto">
        <JobsList jobs={jobs} />
      </div>
    );
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-500">
        <NavBar />
        <Header />
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
              <RecentJobs jobs={jobs} />
            </div>
            <button
              className="my-4 hover:text-gray-500 transition duration-150"
              onClick={() => router.push("/jobs")}>See More <b>2+</b></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
