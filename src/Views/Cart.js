import React from "react";
import { Card, ListGroup, ListGroupItem, Image, Button } from "react-bootstrap";
import { useStore, REMOVEBOOK, CHECKOUT } from "../Store/store";
import { Link } from "react-router-dom";

function Cart() {
  const dispatch = useStore((state) => state.dispatch);
  const cart = useStore((state) => state.cart);
  let cartTotal = 0;

  return (
    <>
      {console.log(cart)}
      <h1>Your Cart</h1>
      <div className="checkoutBox">
        <div className="checkout">
          {cart.forEach((bookInCart) => {
            console.log(bookInCart);
            cartTotal += bookInCart.PurchasePrice;
          })}
        </div>
        <Card style={{ width: "250px" }}>
          <Card.Header>Checkout</Card.Header>
          <Card.Body>
            <Card.Title>Cart Total: ${cartTotal.toFixed(2)}</Card.Title>
            <Card.Title>
              {cartTotal.toFixed(2) < 100 ? (
                ""
              ) : (
                <h4 style={{ color: "red" }}>Not Enough Credits</h4>
              )}
            </Card.Title>
            <Link to="/ThankYouPage">
              <Button
                variant="outline-dark"
                onClick={(e) => {
                  console.log("inside checkout function");
                  dispatch({ type: CHECKOUT });
                }}
              >
                Checkout
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      {cart.map((book) => {
        return (
          <div className="shoppingCart">
            <div
              className="cartBooks"
              style={{ marginTop: "80px", width: "700px", height: "auto" }}
            >
              <Image
                src={book.imageURL}
                thumbnail
                style={{ height: "22rem", width: "250px" }}
              />

              <Card
                style={{
                  width: "20rem",
                  height: "22rem",
                  marginBottom: "20px",
                }}
              >
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Author: {book.Author}
                  </Card.Subtitle>
                  <hr />
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Price: ${book.PurchasePrice}</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Footer className="text-muted">
                  <Button
                    type="submit"
                    variant="outline-dark"
                    style={{ marginTop: "4px" }}
                    onClick={(e) => {
                      e.preventDefault();
                      cart.splice(cart.indexOf(book), 1);
                      console.log("deleted:", cart.indexOf(book), 1);
                      dispatch({ type: REMOVEBOOK, payload: cart });
                      console.log("after dispatch:", cart);
                    }}
                  >
                    Remove
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Cart;
