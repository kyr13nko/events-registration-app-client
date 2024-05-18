import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmailFilter, setNameFilter, clearFilters } from "../../store/filter/filterSlice";

const Filter = ({ title }) => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState("");

  const onFilterChange = ({ target: { value } }) => {
    setFilterValue(value);
    if (title === "name") dispatch(setNameFilter(value));
    if (title === "email") dispatch(setEmailFilter(value));
  };

  const clearFilter = () => {
    setFilterValue("");
    dispatch(clearFilters());
  };

  return (
    <div>
      <label>
        Find participant by {title}
        <input type="text" name="filter" value={filterValue} onChange={onFilterChange} />
      </label>
      <button onClick={clearFilter}>Reset</button>
    </div>
  );
};

export default Filter;
