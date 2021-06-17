import React, { useEffect, useState } from "react";
import {
  BriefcaseIcon,
  ClockIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import { useHistory } from "react-router-dom";

function JobCard({ image, title, name, duration, location, id }) {
  const router = useHistory();
  const [jobDuration, setJobDuration] = useState("");
  useEffect(() => {
    switch (duration) {
      case "parttime":
        setJobDuration("Part Time");
        break;
      case "fulltime":
        setJobDuration("Full Time");
        break;
      case "temporarily":
        setJobDuration("Temporarily");
        break;
      default:
        setJobDuration(duration);
        break;
    }
  }, [duration]);

  return (
    <div
      className="flex p-2 cursor-pointer hover:shadow-lg rounded transition duration-200 items-center"
      onClick={() => router.push(`/jobs/${id}`)}
    >
      <div className="mr-2">
        <img
          src={
            image
              ? image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmJIn6Iz5B1GCZoZzs2Ugtc3vS8jAT4OJ7fSeyBnUcuQn7xCl6X3QGOfqsmbabM-WUu8&usqp=CAU"
          }
          alt="job"
          className="h-14 w-14 object-cover rounded "
        />
      </div>
      <div className="justify-start ">
        <p className="font-medium">{title}</p>
        <div className=" items-left text-sm text-gray-700 flex flex-col">
          <div className="flex items-center gap-2">
            <BriefcaseIcon className="h-4 ml-1 text-blue-800" />
            <p>{name}</p>
          </div>
          {location && (
            <div className="flex items-center gap-2">
              <LocationMarkerIcon className="h-4 ml-1 text-red-600" />
              <p>{location}</p>
            </div>
          )}
          <div className="flex items-center gap-2">
            <ClockIcon className="h-4 ml-1 text-pink-800" />
            <p>{jobDuration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
