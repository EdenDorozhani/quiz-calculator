const FilterInputs = ({
  value,
  onChangeHandler,
  questionFilters,
  defaultValue,
}) => {
  return (
    <select name={value} onChange={onChangeHandler}>
      <option disabled selected hidden>
        {defaultValue}
      </option>
      {questionFilters[value].map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default FilterInputs;
