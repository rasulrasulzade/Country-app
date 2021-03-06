import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Col, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { Country } from "../redux/actions";
import { addCountry } from "../redux/countrySlice";

const AddCountryForm = () => {
  const dispatch = useDispatch();
  const [redirect, setRedirect] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: Country) => {
    dispatch(addCountry(data));
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <Col className="mx-auto" xs={7}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <FormControl
            placeholder="Country's name"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && (
            <span className="text-danger">Name is required.</span>
          )}
        </div>

        <div className="mb-3">
          <FormControl
            placeholder="Country's capital"
            name="capital"
            ref={register({ required: true })}
          />
          {errors.capital && (
            <span className="text-danger">Capital is required.</span>
          )}
        </div>

        <div className="mb-3">
          <FormControl
            placeholder="Country's area"
            name="area"
            ref={register({ required: true })}
          />
          {errors.area && (
            <span className="text-danger">Area is required.</span>
          )}
        </div>

        <div className="mb-3">
          <FormControl
            placeholder="Country's population"
            name="population"
            ref={register({ required: true })}
          />
          {errors.population && (
            <span className="text-danger">Population is required.</span>
          )}
        </div>

        <div className="mb-3">
          <FormControl
            placeholder="Country's img URL"
            name="img"
            ref={register({ required: true })}
          />
          {errors.img && (
            <span className="text-danger">Img URL is required.</span>
          )}
        </div>

        <Button className="mt-2 d-block w-100" type="submit">
          Submit
        </Button>
      </form>
    </Col>
  );
};
export default AddCountryForm;
