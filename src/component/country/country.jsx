import React from "react";
import "./Country.css";
const Country = ({ country }) => {
//   console.log(country);

const handleVisited = ()=>{
    console.log("buton clicked")
}

  return (


    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

      <div>
        <h3>Country Name : {country.name.common}</h3>

        <h4>Country Population : {country.population.population > 3000000 ? "Big Country": "Small Country"}</h4>

        <h4>Region : {country.region.region}</h4>

        <button onClick={()=>handleVisited(country.ccn3.name)} className="countryBtn">Visited</button>
      </div>
    </div>
  );
};

export default Country;
