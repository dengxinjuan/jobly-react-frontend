import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import JoblyApi from "../api";

const Job = () => {
  const { id } = useParams();
  const [theJob, setTheJob] = useState(null);

  useEffect(
    function getTheJob() {
      async function get() {
        setTheJob(await JoblyApi.getJobs(id));
      }

      get();
    },
    [id]
  );

  console.log(theJob);
  if (!theJob) return "LOADING!";

  return (
    <div>
      <h1>{theJob.title}</h1>
      <h2>
        <Link to={`/companies/${theJob.company.handle}`}>
          company:{theJob.company.name}
        </Link>
      </h2>

      <h2>salary: ${theJob.salary}</h2>
    </div>
  );
};

export default Job;
