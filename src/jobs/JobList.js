import JobCard from "./JobCard";
import JoblyApi from "../api";
import { useEffect, useState } from "react";
import SearchForm from "../SearchForm";

function JobList() {
  const [allJobs, setAllJobs] = useState(null);

  useEffect(function getAllJobs() {
    async function getJobs() {
      let data = await JoblyApi.request("jobs");
      setAllJobs(data.jobs);
    }
    getJobs();
  }, []);

  //we use the search and use search form to filter the jobs
  async function search(name) {
    let companies = await JoblyApi.getJobsByTitle(name);
    setAllJobs(companies);
  }

  console.log(allJobs);
  if (!allJobs) return "LOADING!";

  return (
    <div>
      <h1>Search the jobs.</h1>
      <SearchForm search={search} />
      {allJobs.map((job) => (
        <JobCard
          id={job.id}
          title={job.title}
          salary={job.salary}
          equity={job.equity}
          companyName={job.companyName}
        />
      ))}
    </div>
  );
}

export default JobList;
