import React from "react";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import useForm from "../../forms/hooks/useForms";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/joi-schema/loginSchema";

function EditProfile() {
  const { user } = useUser();

  const { value, ...rest } = useForm(initialLoginForm, loginSchema, () => {});

  const inputs = [
    { label: "first name", error: value.errors.first },
    { label: "middle name", error: value.errors.middle },
    { label: "last name", error: value.errors.last },
    { label: "phone", error: value.errors.phone },
    { label: "email", error: value.errors.email },
    { label: "password", error: value.errors.password },
    { label: "image url", error: value.errors.url },
    { label: "image alt", error: value.errors.alt },
    { label: "state", error: value.errors.state },
    { label: "country", error: value.errors.country },
    { label: "city", error: value.errors.city },
    { label: "street", error: value.errors.street },
    { label: "house Number", error: value.errors.houseNumber },
    { label: "zip", error: value.errors.zip },
  ];

  return (
    <Form
      onSubmit={rest.onSubmit}
      onChange={rest.validateForm}
      onReset={rest.handleReset}
      styles={{ maxWidth: "800px" }}
      title="Edit user"
    >
      {inputs.map((input) => (
        <Input
          key={input.label}
          name={input.label}
          label={input.label}
          type={input.label}
          error={input.error}
          onChange={rest.handleChange}
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
