import "./App.css";
import JoblyApi from "./api";
import axios from "axios";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar />
          <Routes />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
