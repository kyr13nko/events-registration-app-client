import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEmailFilter, setNameFilter, clearFilters } from "../../store/filter/filterSlice";

import { Input } from "../../styles/GlobalStyles";

import { FilterWrapper } from "./Filter.styled";

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
    <FilterWrapper>
      <label>
        Find participant by {title}
        <Input type="text" name="filter" value={filterValue} onChange={onFilterChange} />
      </label>
      <button type="submit" onClick={clearFilter}>
        clear
      </button>
    </FilterWrapper>
  );
};

export default Filter;
