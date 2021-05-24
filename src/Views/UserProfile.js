import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useStore } from "../Store/store";
import { getUser, deleteUser } from "../fetchRequest";
import { useHistory } from "react-router-dom";

function UserProfile() {

  const dispatch = useStore((state) => state.dispatch);
  const history = useHistory();

  const userInfo = useStore((state) => state.user);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    creditBalance: 50.0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newUserInfo = {};
    getUser(userInfo.token, newUserInfo).then((data) => {
      console.log(data);
      setUser(data.user);
    });
  }
  const handleDelete = (e) => {
    const reRoute = (e) => history.push("/");
    e.preventDefault();
    localStorage.removeItem("user");
    deleteUser(userInfo.user.email, userInfo.accessToken);
    dispatch({ type: "LOGOUT" });
    reRoute();
  };

  return (
    <>
      <h1>{userInfo.user.firstName}'s Profile</h1>
      <hr />
      <div className="userProfile">
        <Card border="light" style={{ width: "18rem", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>Account Settings</Card.Title>
            <Card.Text>
              First Name: {userInfo.user.firstName}
              <br />
              Last Name: {userInfo.user.lastName}
              <br />
              Email: {userInfo.user.email}
            </Card.Text>
            <Button onSubmit={handleSubmit} variant="outline-dark">
              <Link to="/AccountSettings" style={{ color: "black" }}>
                Edit Account Settings
              </Link>
            </Button>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: "18rem", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>Delete Account</Card.Title>
            <Button
              variant="outline-dark"
              type="submit"
              style={{ marginTop: "20px" }}
              onClick={handleDelete}
            >
              Delete Account
          </Button>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: "18rem", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>Credit Balance</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Currency</Card.Subtitle>
            <Card.Text>
              <h2>${userInfo.user.creditBalance}</h2>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card border="light" style={{ width: "18rem", marginBottom: "20px" }}>
          <Card.Body>
            <Card.Title>Address Book</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Current Address
            </Card.Subtitle>
            <Card.Text>
              Street Address:
              <br />
              City:
              <br />
              State:
              <br />
              Zip Code:
            </Card.Text>
            <Button variant="outline-dark">
              <Link to="/AddressPage" style={{ color: "black" }}>
                Add/Update Address
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default UserProfile;
