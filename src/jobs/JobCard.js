const JobCard = ({ id, title, salary, equity, companyName }) => {
  return (
    <div key={id} id={id}>
      <h1>{title}</h1>
      {salary}
      {equity}
      {companyName}
    </div>
  );
};

export default JobCard;
