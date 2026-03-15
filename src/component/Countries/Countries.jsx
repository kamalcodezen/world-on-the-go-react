import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country) => {
    const updateVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(updateVisitedCountry);
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
      <ol>
       {
        visitedCountry.map(visitCountry => <li>{visitCountry.name.common}</li>)

       }
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedCountry={handleVisitedCountry}
            key={country.cca3.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
