import React, { useEffect, useState } from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForms";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";
import useAxiosPrivate from "../../cards/hooks/useAxiosPrivate";

function EditProfile({ onClose }) {
  const { user } = useUser();
  const axiosPrivate = useAxiosPrivate();
  const { value, ...rest } = useForm(initialLoginForm, loginSchema, () => {});

  const refactorData = (data) => ({
    "first name": data.name.first,
    "middle name": data.name.middle,
    "last name": data.name.last,
    phone: data.phone,
    "image url": data.image.url,
    "image alt": data.image.alt,
    state: data.address.state,
    country: data.address.country,
    city: data.address.city,
    street: data.address.street,
    "house Number": data.address.houseNumber,
    zip: data.address.zip,
  });

  const reconstructData = (refactoredData) => ({
    name: {
      first: refactoredData["first name"],
      middle: refactoredData["middle name"],
      last: refactoredData["last name"],
    },
    phone: refactoredData.phone,
    image: {
      url: refactoredData["image url"],
      alt: refactoredData["image alt"],
    },
    address: {
      state: refactoredData.state,
      country: refactoredData.country,
      city: refactoredData.city,
      street: refactoredData.street,
      houseNumber: refactoredData["house Number"],
      zip: refactoredData.zip,
    },
  });

  const inputs = [
    { label: "first name", state: useState(), error: value.errors.first },
    { label: "middle name", state: useState(), error: value.errors.middle },
    { label: "last name", state: useState(), error: value.errors.last },
    { label: "phone", state: useState(), error: value.errors.phone },
    { label: "image url", state: useState(), error: value.errors.url },
    { label: "image alt", state: useState(), error: value.errors.alt },
    { label: "state", state: useState(), error: value.errors.state },
    { label: "country", state: useState(), error: value.errors.country },
    { label: "city", state: useState(), error: value.errors.city },
    { label: "street", state: useState(), error: value.errors.street },
    {
      label: "house Number",
      state: useState(),
      error: value.errors.houseNumber,
    },
    { label: "zip", state: useState(), error: value.errors.zip },
  ];

  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    axiosPrivate.get(`/${user._id}`).then((response) => {
      const data = refactorData(response.data);
      setUserDetails(data);
      inputs.forEach((input) => {
        input.state[1](data[input.label]);
      });
    });
  }, []);

  return (
    <Form
      onSubmit={() => {
        axiosPrivate
          .put(
            `/${user._id}`,
            reconstructData(
              Object.assign(
                {},
                ...inputs.map((input) => ({ [input.label]: input.state[0] }))
              )
            )
          )
          .then(() => onClose());
      }}
      onChange={() => false}
      onReset={rest.handleReset}
      styles={{ maxWidth: "800px" }}
      title="Edit user"
    >
      {userDetails &&
        inputs.map((input) => (
          <Input
            key={input.label}
            name={input.label}
            label={input.label}
            type={input.label}
            error={input.error}
            value={input.state[0]}
            onChange={(event) => {
              input.state[1](event.target.value);
            }}
            data={value.data}
            sm={6}
          />
        ))}
      <Grid item>
        <FormControlLabel
          onChange={(e) =>
            rest.setData({ ...value.data, isBusiness: !!e.target.checked })
          }
          name="isBusiness"
          control={<Checkbox value={value.data.isBusiness} color="primary" />}
          label="Signup as business"
        ></FormControlLabel>
      </Grid>
    </Form>
  );
}

export default EditProfile;
