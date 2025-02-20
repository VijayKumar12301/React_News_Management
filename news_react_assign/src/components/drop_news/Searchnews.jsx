import React from 'react';

function SearchNews() {
  return (
    <div>
      <h1>Search News</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Search news..." />
        <button className="btn btn-primary" type="button">Search</button>
      </div>
    </div>
  );
}

export default SearchNews;