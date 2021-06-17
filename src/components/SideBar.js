import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function SideBar({ searchfor }) {
  const [duration, setDuration] = useState("full-time");
  const [category, setCategory] = useState("front-end");
  const router = useHistory();

  function searchJob() {
    searchfor(category, duration);
    router.push("/?category=web-design");
  }
  return (
    <div className="flex flex-col  gap-2 border p-2 rounded-sm h-full">
      <h1 className="text-2xl font-thin">Search Jobs</h1>
      <div className="flex-col items-center">
        <p className="text-sm text-gray-600">Category</p>
        <select
          className="border py-2 mt-2 active:border-blue-400"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="web-design">Web Design</option>
          <option value="ui-ux">UI/UX</option>
          <option value="graphic-design">Graphic Design</option>
          <option value="front-end">Frontend Web Developer</option>
          <option value="back-end">Backend Web Developer</option>
        </select>

        <p className="text-sm mt-4 text-gray-600">Category</p>
        <select
          className="border py-2 mt-2 active:border-blue-400 w-full"
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="fulltime">Full Time</option>
          <option value="parttime">Part Time</option>
          <option value="temporarily">Temporarily</option>
        </select>
        <button
          onClick={() => searchJob()}
          className="py-1 px-2 mt-2 w-full bg-blue-700 text-white rounded-sm"
        >
          Search Now
        </button>
      </div>
    </div>
  );
}
export default SideBar;
