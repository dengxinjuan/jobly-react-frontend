import "./App.css";
import JoblyApi from "./api";
import axios from "axios";
import { useEffect, useState } from "react";
import Routes from "./Routes";

function App() {
  /*const [companies, setCompanies] = useState({});

  useEffect(() => {
    const result = async () => {
      const res = await JoblyApi.getAllCompanies();
      setCompanies(res);
    };
    result();
  });

  console.log(companies);*/
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  );
}

export default App;
