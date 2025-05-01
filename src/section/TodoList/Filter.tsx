import React from "react";
import useTodoListStore, { FILTER_TYPES } from "../../stores/useTodoListStrore";

const Filter = () => {
  const filter = useTodoListStore((state) => state.filter);
  const setFilter = useTodoListStore((state) => state.setFilter);

  const filters: FILTER_TYPES[] = ["all", "complete", "pending"];

  return (
    <div className="filter">
      {filters.map((filterName) => (
        <div
          key={filterName}
          onClick={() => setFilter(filterName)}
          className={`filter-button ${filterName} ${
            filter === filterName ? "active" : ""
          }`}
        >
          {filterName}
        </div>
      ))}
    </div>
  );
};

export default Filter;
