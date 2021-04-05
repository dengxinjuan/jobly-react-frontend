import { useState } from "react";

export const SearchForm = ({ search }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  };

  return (
    <form>
      <input
        type="text"
        placeholder="searchterm"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search!</button>
    </form>
  );
};
