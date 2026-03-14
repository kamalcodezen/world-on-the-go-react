import React from "react";

const Country = ({ country }) => {
  console.log(country);

  return (
    <div style={{ textAlign: "center", display:"flex", marginBottom:"30px"}}>

      <div style={{width:"600px"}}>

        <h3>Country Name : {country.name.official}</h3>

        <h4>Country Population : {country.population.population}</h4>
        
        <h4>Country Region : {country.region.region}</h4>

      </div>

      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

    </div>

  );
};

export default Country;
