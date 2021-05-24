import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import { BooksArray } from "../Components/BooksArray";
import { useStore, ADDBOOK } from "../Store/store";

function SingleBookInfo(props) {
  const dispatch = useStore((state) => state.dispatch);
  const [myCart, setMyCart] = useState([
    {
      id: 0,
      title: "",
      author: "",
      imageURL: "",
      purchasePrice: 0,
    },
  ]);
  let selectedBookId = props.match.params.id;

  function handleAddBookToCart(e) {
    BooksArray.map((singleBook) => {
      if (singleBook.id == selectedBookId) {
        const newBook = {
          id: singleBook.id,
          Title: singleBook.Title,
          Author: singleBook.Author,
          imageURL: singleBook.imageUrl,
          PurchasePrice: singleBook.PurchasePrice,
        };
        setMyCart(newBook);
        dispatch({ type: ADDBOOK, payload: newBook });
      }
    });
  }


  return (
    <>
      {BooksArray.map((singleBook) => {
        if (singleBook.id == selectedBookId) {
          return (
            <div className="bookInfo" style={{ marginTop: "80px" }}>
              <Image
                src={singleBook.imageUrl}
                thumbnail
                style={{ height: "320px", width: "180px" }}
              />

              <Card
                style={{ width: "45rem", height: "auto", marginBottom: "20px" }}
              >
                <Card.Body>
                  <Card.Title>{singleBook.Title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Author: {singleBook.Author}
                  </Card.Subtitle>
                  <hr />
                  <Card.Text>{singleBook.Description}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  ${singleBook.PurchasePrice}
                  <hr />
                  <Button variant="outline-dark" onClick={handleAddBookToCart}>
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          );
        } else return;
      })}
    </>
  );
}

export default SingleBookInfo;
