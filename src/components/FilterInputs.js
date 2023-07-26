const FilterInputs = ({ value, onChangeHandler, questionFilters }) => {
  return (
    <div>
      {value === "numberOfQuestions" ? (
        <label>Number of Questions</label>
      ) : (
        <label>{value[0].toUpperCase() + value.slice(1)}</label>
      )}
      <select name={value} onChange={onChangeHandler}>
        <option disabled selected hidden>
          Choose Value
        </option>
        {questionFilters[value].map((value, index) => {
          return (
            <option key={index} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FilterInputs;
