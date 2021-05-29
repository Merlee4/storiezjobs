import React, { useEffect, useState } from "react";
import { LocationMarkerIcon, UserGroupIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import axios from "axios";
import JobsList from "./JobsList";
import PrompModal from "./PrompModal";

function ProfileMainContent({ jobdata }) {
  const [Apply, setApply] = useState(false);
  const [myJobs, setMyJobs] = useState([]);
  const job = jobdata;
  console.log(job);
  const setIsOpen = () => {
    setApply(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:9000/job/${jobdata._id}`).then((res) => {
      setMyJobs(res.data);
    });
  });
  return (
    <div>
      <div className="">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1626912000&v=beta&t=d8TvzdxEh-ZthnCjpGmRIgBwvWTZG-NF230xBZ4iZXU"
          className="h-28 w-28 object-fill"
          alt="profile"
        />
        <h1 className="text-2xl my-2 font-medium text-gray-800">Google</h1>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <LocationMarkerIcon className="h-4 gap-2" />
          <p>{jobdata.location}</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <button
            onClick={() => setApply(true)}
            className="py-2 px-4 bg-blue-600 rounded font-medium text-white mt-2"
          >
            Apply Now
          </button>

          <div className="flex items-center gap-2">
            <UserGroupIcon className="h-4" />
            <p>Employees</p>
            <p className="font-medium">{job.employees}</p>
          </div>
        </div>
        <p className="text-sm text-red-700">{job.available}</p>
      </div>
      <div className="rounded-lg border py-4 px-8 bg-white text-gray-700 mt-4">
        <h1 className="text-2xl my-4 font-medium">About the Role</h1>
        <p className="">{job.about}</p>

        <h1 className="text-xl my-4 font-medium">Requirements</h1>
        <ul className="list-disc ml-8">
          {job.requirements.map((req) => (
            <li>{req}</li>
          ))}
        </ul>
        <p>{job.requirementsText}</p>

        <p className="py-4">Check out our career opportunities</p>
        <div className="mx-auto">
          <JobsList jobs={myJobs} />
        </div>
        <div className="flex justify-between gap-4">
          <div className="rounded-lg border p-4 my-4 w-full">
            <p className="text-sm">Contact info</p>
            <Link className="text-blue-700 hover:underline font-medium">
              google.com
            </Link>
            <p className="text-sm my-2">Location </p>
            <button className="p-2 rounded bg-gray-200">Show on map</button>
          </div>
          <div className="rounded-lg border p-4 my-4 w-full">
            <p className="text-sm">Email us</p>
            <Link className="text-blue-700 hover:underline font-medium">
              jobs@google.com
            </Link>
            <p className="text-sm">Phone </p>
            <Link className="text-blue-700 hover:underline font-medium">
              +260 964487617
            </Link>
          </div>
        </div>
      </div>
      <PrompModal isOpen={Apply} setIsOpen={setIsOpen} />
    </div>
  );
}

export default ProfileMainContent;
