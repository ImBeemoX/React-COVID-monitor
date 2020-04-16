import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import getData from "../Hooks/getData";

const Lists = () => {
  const a = [1, 2, 3, 4, 5];
  const [countries, setCountries] = useState([]);

  if (countries.length == 0) {
    getData().then((data) => {
      setCountries(data.data.Countries);
      console.log(countries);
    });
  }

  const countryList = countries.map((country) => {
    return (
      <ListGroup.Item eventKey={country.CountryCode}>
        {country.Country}
      </ListGroup.Item>
    );
  });

  return <ListGroup>{countryList}</ListGroup>;
};

export default Lists;
