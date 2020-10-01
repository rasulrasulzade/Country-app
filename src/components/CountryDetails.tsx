import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Col } from "react-bootstrap";
import { AiOutlineAreaChart } from "react-icons/ai";
import { MdPeopleOutline } from "react-icons/md";

import { Country, StoreState } from "../redux/actions";
import { fetchCountries } from "../redux/countrySlice";

const CountryDetails: React.FC = () => {
  const dispatch = useDispatch();
  let { id }: { id: string } = useParams();
  const country: Country | Country[] = useSelector((state: StoreState) => state.countries);
  useEffect(() => {
    dispatch(fetchCountries(id));
  }, []);
  return (
    <>
      <Col xs={6}>
        <div className="mb-5">
          <h1>{country.name}</h1>
          <span className="mr-4">
            <MdPeopleOutline /> {country.population} million
          </span>
          <span className="mr-4">
            <AiOutlineAreaChart />
            {country.area} km²
          </span>
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste
          animi odio quibusdam est magnam facere nobis dolorum, mollitia fugiat
          veritatis vero laborum, nam incidunt? Nemo placeat accusantium
          veritatis repudiandae. Voluptatem adipisci molestias in et ipsam
          officia deserunt impedit voluptates non corporis exercitationem
          quisquam aperiam veritatis, illum vitae eaque doloribus!
        </p>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et iste
          animi odio quibusdam est magnam facere nobis dolorum, mollitia fugiat
          veritatis vero laborum, nam incidunt? Nemo placeat accusantium
          veritatis repudiandae. Voluptatem adipisci molestias in et ipsam
          officia deserunt impedit voluptates non corporis exercitationem
          quisquam aperiam veritatis, illum vitae eaque doloribus!
        </p>
      </Col>

      <Col xs={6} style={{ width: "45rem", height: "30rem" }}>
        <img className="w-100 h-100 rounded" src={country.img} />
      </Col>
    </>
  );
};

export default CountryDetails;
