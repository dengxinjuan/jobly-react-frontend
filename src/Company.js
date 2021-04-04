import { useParams } from "react-router-dom";

const Company = () => {
  const { handle } = useParams();
  return <div>single company here {handle}</div>;
};

export default Company;
