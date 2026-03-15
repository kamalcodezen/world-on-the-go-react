import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);

  const handleVisitedCountry = (country) => {
    console.log("visited button clicked",country);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Total Countries {countries.length}
      </h1>

      <div className="countries">
        {countries.map((country) => (
          <Country handleVisitedCountry={handleVisitedCountry} key={country.cca3.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
