import React, { useState, useEffect } from "react";
import Home from "./pages/Home";

import useFetch from "./hooks/useFetch";

function App() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = useFetch("http://localhost:9000");
  useEffect(() => {
    setJobs(fetchJobs.sort((a, b) => a.timestamp - b.timestamp));
  }, [fetchJobs]);

  let [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("client")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <div>
      <Home jobs={jobs} />
    </div>
  );
}

export default App;
