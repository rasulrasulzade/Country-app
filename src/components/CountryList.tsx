import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Card, Button } from "react-bootstrap";

import { getCountries, StoreState } from "../redux/actions";

import "bootstrap/dist/css/bootstrap.min.css";

const CountryList: React.FC = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: StoreState) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <>
      {countries.length > 0 &&
        countries.map((country, index) => (
          <Col xs={6} key={country.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={country.img}
                style={{ height: "20rem" }}
              />
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>Capital: {country.capital}</Card.Text>
                <Card.Text>Area: {country.area} km²</Card.Text>
                <Card.Text>Population: {country.population} million</Card.Text>
                <Button variant="primary">Go {country.name}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default CountryList;
