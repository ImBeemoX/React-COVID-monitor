import React, { useState, useEffect } from "react";
import getData from "../Hooks/getData";
import Table from "react-bootstrap/Table";

const Lists = () => {
  const [countries, setCountries] = useState([]);

  if (countries.length === 0) {
    getData().then((data) => {
      setCountries(data.data.Countries);
    });
  }

  useEffect(() => {
    console.log(countries.length);
  });

  const getInfo = () => {
    return countries.map((country) => {
      return (
        <tr>
          <td>{country.Country}</td>
          <td>{country.NewConfirmed}</td>
          <td>{country.TotalConfirmed}</td>
        </tr>
      );
    });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Country Name</th>
          <th>New Confirmed</th>
          <th>Total Confirmed</th>
        </tr>
      </thead>
      <tbody>{getInfo()}</tbody>
    </Table>
  );
};

export default Lists;
