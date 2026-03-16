import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    setVisitedCountry([...visitedCountry, country]);
  };

  const handleVisitedFlag = (flag) => {
    const isExits = visitedFlag.find((item) => item === flag);

    if (!isExits) {
      const updateVisitedFlag = [...visitedFlag, flag];
      setVisitedFlag(updateVisitedFlag);
    }
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Total Countries {countries.length}
      </h1>
      <h2>Visited Country : {visitedCountry.length}</h2>
      <h2>Visited Flag : {visitedFlag.length}</h2>
      <ol>
        {visitedCountry.map((visitCountry) => (
          <li>{visitCountry.name.common}</li>
        ))}
      </ol>

      <div>
        {visitedFlag.map((flag) => (
          <img src={flag}></img>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3.cca3}
            country={country}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
