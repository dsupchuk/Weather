import { useState } from "react";
import { CityInfoBox } from "./cityInfoBox";
import "./searchBoxInput.css";
function SearchBox() {
  const [value, setValue] = useState("");
  const [cityNames, setCityNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    setCityNames([...cityNames, value]);
    setValue("");
  };
  console.log(cityNames);
  return (
    <div className="search">
      <div className="search-inputs">
        <input
          type="text"
          className="input"
          value={value}
          placeholder="type the city"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Search this city</button>
      </div>
      {cityNames.map((el) => {
        return <CityInfoBox name={el} key={el} />;
      })}
    </div>
  );
}

export default SearchBox;
