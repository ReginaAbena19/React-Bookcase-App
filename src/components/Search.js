import React from "react";

const propTypes = {};
const defaultProps = {};

const Search = ({ keyword, setKeyword, findBooks }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    findBooks(keyword);
  };

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <p style={{ color: "red" }}>
          <em>{keyword && "Keywords Typed:" + keyword}</em>
        </p>
        <label>
          <input
            type="text"
            placeholder="Enter name, author, keyword or genre..."
            name="search"
            value={keyword}
            onChange={onChange}
          />
        </label>
        <button type="submit" className="searchButton">
          Search
        </button>
      </form>
    </div>
  );
};

//input validation
Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
