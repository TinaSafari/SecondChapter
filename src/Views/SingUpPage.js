import React, { useState} from "react";
import { Button, Form, Col } from "react-bootstrap";
import { createUser } from "../fetchRequest";
import { useStore, SIGNUP } from "../Store/store";
import { useHistory } from "react-router-dom";
import { FormErrors } from "./FormErrors";


function SignUpPage() {
  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();

  const [userData, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    creditBalance: 100.0,
    formErrors: { firstName: "", lastName: "", email: "", password: "" },
    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    passwordValid: false,
    formValid: false,
  });

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    validateField(inputName, inputValue);
    setUserdata((state) => ({ ...state, [inputName]: inputValue }));
  };

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = userData.formErrors;
    let firstNameValid = userData.firstNameValid;
    let lastNameValid = userData.lastNameValid;
    let emailValid = userData.emailValid;
    let passwordValid = userData.passwordValid;
    switch (fieldName) {
      case "firstName":
        firstNameValid = value.length >= 2;
        fieldValidationErrors.firstName = firstNameValid ? "" : " is too short";
        break;
      case "lastName":
        lastNameValid = value.length >= 2;
        fieldValidationErrors.lastName = lastNameValid ? "" : " is too short";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 5;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    setUserdata(
      {
        formErrors: fieldValidationErrors,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      validateForm
    );
  };

  const validateForm = () => {
    setUserdata({
      formValid:
        userData.firstNameValid &&
        userData.lastNameValid &&
        userData.emailValid &&
        userData.passwordValid,
    });
  };

  const errorClass = (error) => {
    return error.length === 0 ? "" : "has-error";
  };

  const handleSubmit = (e) => {
    const reRoute = (e) => history.push("/");
    console.log(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    e.preventDefault();
    createUser(
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.password
    );
    dispatch({ type: SIGNUP, payload: userData });

    reRoute();
  };

  return (
    <>
      <h1>Create an Account</h1>
      <hr />
      <Form
        onSubmit={handleSubmit}
        style={{ margin: "auto", width: "700px", paddingBottom: "20px" }}
      >
        <div className="panel panel-default">
          <FormErrors  formErrors={userData.formErrors} />
        </div>
        <Form.Row>
          <Col>
            <Form.Group as={Col}>
              <div
                className={`form-group ${errorClass(
                  userData.formErrors.firstName
                )}`}
              ></div>
              <Form.Control
                type="text"
                name="firstName"
                placeholder="First name"
                onChange={handleChange}
                value={userData.firstName}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col}>
              <div
                className={`form-group ${errorClass(
                  userData.formErrors.lastName
                )}`}
              ></div>
              <Form.Control
                type="text"
                name="lastName"
                placeholder="Last name"
                value={userData.lastName}
                required
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Form.Row>
        <br />
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <div
              className={`form-group ${errorClass(userData.formErrors.email)}`}
            >
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={userData.email}
                required
                onChange={handleChange}
              />
            </div>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <div
              className={`form-group ${errorClass(
                userData.formErrors.password
              )}`}
            >
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={userData.password}
                required
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Re-Enter Password</Form.Label>
            <Form.Control type="password" placeholder="Re-Enter Password" />
          </Form.Group>
        </Form.Row>

        <Button variant="outline-dark" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default SignUpPage;