import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import JoblyApi from "../api";
import JobCard from "./JobCard";

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
      <JobCard
        id={theJob.id}
        title={theJob.title}
        salary={theJob.salary}
        companyName={theJob.company.name}
        equity={theJob.equity}
        companyHandle={theJob.company.handle}
      />
    </div>
  );
};

export default Job;
