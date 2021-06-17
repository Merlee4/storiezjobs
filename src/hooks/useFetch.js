import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setjobs(res.data);
      })
      .catch((err) => {
        return setjobs({ msg: "error", err });
      });
  }, [url]);
  return jobs;
}

export default useFetch;
