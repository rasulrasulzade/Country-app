import React from "react";
import { Container, Row } from "react-bootstrap";
import {Switch, Route} from "react-router-dom";

import Navi from "./Navi"
import CountryList from "./CountryList";
import AddCountryForm from "./AddCountryForm";
import NotFound from "./NotFound";
import CountryDetails from "./CountryDetails";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navi/>
      <Container className="pt-3">
        <Row>
          <Switch>
            <Route exact path="/" component={CountryList}/>
            <Route exact path="/countries/:id" component={CountryDetails}/>
            <Route exact path="/add-country" component={AddCountryForm}/>
            <Route component={NotFound}/>
          </Switch>
          </Row>
      </Container>
    </div>
  );
}

export default App;
