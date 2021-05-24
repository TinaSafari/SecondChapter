import React from "react";
import {
  Navbar,
  Nav,
  Button,
  Form,
  NavDropdown,
  Image
} from "react-bootstrap";
import cartIMG from "../img/shoppingcart.png";
import { Link } from "react-router-dom";
import { useStore } from "../Store/store";
import { useHistory } from "react-router-dom";
import bookLogo from "../img/bookLogo.png"

function NavBar() {
  const cart = useStore((state) => state.cart);
  const user = useStore((state) => state.user);
  const dispatch = useStore((state) => state.dispatch);

  const history = useHistory();
  const reRoute = (e) => history.push("/");

  const logout = (e) => {
    console.log(user)
    dispatch({ type: "LOGOUT" })
    reRoute()
  };

  return (
    <>
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#caebb7' }}>
        <Navbar.Brand>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Image src={bookLogo} style={{ height: '40px', width: '40px' }} />
            <h3 style={{ color: 'grey', fontFamily: "Lucida Console" }}>Second Chapter</h3>
          </Link>
        </Navbar.Brand>
        <Form inline></Form>
        <NavDropdown
          title={user.accessToken ? `Hi, ${user.user.firstName}` : "My Account"}
          id="basic-nav-dropdown"
          style={{ marginLeft: "70%" }}
        >
          <NavDropdown.Item to="#action/3.4">
            <div className="signInButton">
              {!user.accessToken ? (
                <Button variant="outline-dark">
                  <Link to="/LogInPage" style={{ color: "black" }}>
                    Sign In
                  </Link>
                </Button>
              ) : (
                <Button variant="outline-dark" onClick={logout}>
                  <a to='/'>Log Out</a>
                </Button>
              )}
            </div>
          </NavDropdown.Item>
          {!user.accessToken ? (
            <NavDropdown.Item to="#action/3.1">
              <Link to="/SignUp" style={{ color: "black" }}>
                Create an Account
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}
          <NavDropdown.Divider />
          {user.accessToken ? (
            <NavDropdown.Item to="#action/3.1">
              <Link to="/UserProfile" style={{ color: "black" }}>
                My Page
              </Link>
            </NavDropdown.Item>
          ) : (
            ""
          )}

          {user.accessToken ? (
            <NavDropdown.Item to="#action/3.4">
              Credit Balance <h5>${user.user.creditBalance}</h5>{" "}
            </NavDropdown.Item>
          ) : (
            ""
          )}
        </NavDropdown>

        {user.accessToken ? (
          <Link to="/shoppingCart">
            <img
              className="cart"
              src={cartIMG}
            />
          </Link>
        ) : (
          ""
        )}
        {user.accessToken ? (
          <h5>{cart.length - 1}</h5>
        ) : (
          ""
        )}
      </Navbar>

      <Navbar variant="light" style={{ backgroundColor: '#caebb7', fontFamily: "Lucida Console" }}>
        <Nav className="mr-auto" style={{ margin: "auto" }}>
          <Link to="/Allbooks" style={{ color: 'grey' }}><h4>| All |</h4></Link>
          <Link to="/AllArtBooks" style={{ color: 'grey' }}><h4>| Art |</h4></Link>
          <Link to="/AllCodingBooks" style={{ color: 'grey' }}><h4>| Coding |</h4></Link>
          <Link to="/AllCookingBooks" style={{ color: 'grey' }}><h4>| Cooking |</h4></Link>
          <Link to="/AllHistoryBooks" style={{ color: 'grey' }}><h4>| History |</h4></Link>
          <Link to="/AllMathBooks" style={{ color: 'grey' }}><h4>| Math |</h4></Link>
          <Link to="/AllPetsBooks" style={{ color: 'grey' }}><h4>| Pets |</h4></Link>
          <Link to="/Searchresult" style={{ color: 'grey' }}><h4>| Search |</h4></Link>
        </Nav>
        <Form inline></Form>
      </Navbar>
    </>
  );
}
export default NavBar;
