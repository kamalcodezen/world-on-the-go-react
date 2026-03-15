import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  //   console.log(country);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // 1st way
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // 2nd way
    // setVisited(visited ? false : true);

    // 3rd way
    setVisited(!visited);
    handleVisitedCountry(country);
  };

  return (
    <div className={`${visited ? "country-visited" : "country"}`}>
      <img
        style={{ width: "250px", height: "150px" }}
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />

      <div>
        <h3>Country Name : {country.name.common}</h3>

        <h4>
          Population :{" "}
          {country.population.population > 3000000
            ? "Big Country"
            : "Small Country"}
        </h4>

        <h4>Region : {country.region.region}</h4>

        <button onClick={handleVisited} className="countryBtn">
          {visited ? "Visited" : "Not-Visited"}
        </button>

        <button onClick={() => handleVisitedFlag(country.flags.flags.png)} className="countryBtn">Visited Flag</button>
      </div>
    </div>
  );
};

export default Country;
