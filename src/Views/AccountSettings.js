import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { UPDATEUSER, useStore } from "../Store/store";
import { patchUser } from "../fetchRequest";
import { useHistory } from "react-router-dom";

function AccountSettings() {
  const userInfo = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);
  const [userForm, setUserForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const history = useHistory();
  console.log(userInfo);

  function handleSubmit(e) {
    const reRoute = (e) => history.push("/UserProfile");
    e.preventDefault();
    patchUser(
      userInfo.accessToken,
      userForm.firstName,
      userForm.lastName,
      userInfo.user.email
    ).then((data) => {
      setUserForm(data);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: UPDATEUSER, payload: data });
    });
    reRoute();
  }

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setUserForm((state) => ({ ...state, [inputName]: inputValue }));
  };



  return (
    <>
      <h2>Manage Account</h2>
      <hr />
      <div style={{ width: "70rem", margin: "auto" }}>
        <div className="accountSettings">
          <Form
            onSubmit={handleSubmit}
            style={{ width: "40rem", marginTop: "30px", marginBottom: "30px" }}
          >
            <Form.Label>Update First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First name"
              value={userForm.firstName}
              onChange={handleChange}
            />
            <br />
            <Form.Label>Update Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={userForm.lastName}
              onChange={handleChange}
            />

            <Button
              variant="outline-dark"
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Submit
            </Button>
          </Form>

        </div>
      </div>
    </>
  );
}

export default AccountSettings;
