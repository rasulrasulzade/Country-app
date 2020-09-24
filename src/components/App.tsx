import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import {Switch, Route} from "react-router-dom";

import { getCountries, StoreState } from "../redux/actions";
import Navi from "./Navi"
import CountryList from "./CountryList";
import AddCountryForm from "./AddCountryForm";
import NotFound from "./NotFound";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state: StoreState) => state.countries);
  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div>
      <Navi/>
      <Container className="pt-3">
        <Row>
          <Switch>
            <Route exact path="/" component={CountryList}/>
            <Route exact path="/add-country" component={AddCountryForm}/>
            <Route component={NotFound}/>
          </Switch>
          </Row>
      </Container>
    </div>
  );
}

export default App;
