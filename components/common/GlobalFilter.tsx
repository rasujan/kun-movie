import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      Search :
      <input
        className="border m-1"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};

export default GlobalFilter;
