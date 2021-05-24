import React, { useState } from "react";
import { Card, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BooksArray } from "../Components/BooksArray";

function Searchresult() {

  const [userInput, setUserInput] = useState("");
  let searchValue = "";
  let something = false

  const searchItem = (e) => {
    searchValue = e.target.value;
  };

  return (
    <>
      <h3>Search Books</h3>
      <hr />
      <Form inline>
        <div
          className="searchBar"
          style={{ margin: "auto", marginBottom: "30px" }}
        >
          <FormControl
            type="text"
            placeholder="Search by Title, Author, or Category"
            onChange={searchItem}
            className="mr-sm-2"
            style={{ width: "500px" }}
          />
          <Button variant="outline-dark" onClick={() => setUserInput(searchValue)}>
            Search
          </Button>
        </div>
      </Form>
      <div className="bookshelf">
        {BooksArray.map((book) => {
          if (book.Category === userInput || book.Author === userInput || book.Title === userInput) {
            something = true
            {
              console.log(book.Category);
              console.log(book.id)
            }
            return (
              <Card
                key={book.id}
                style={{
                  width: "15rem",
                  height: "31.5rem",
                  marginBottom: "20px",
                }}
              >

                <Link to={"./SingleBookInfo/" + book.id}>
                  <Card.Img
                    key={book.id}
                    variant="top"
                    src={book.imageUrl}
                    style={{ height: "320px" }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{book.Title}</Card.Title>
                  <Card.Text>Author: {book.Author}</Card.Text>
                </Card.Body>
              </Card>
            );
          } else return
        })}
        {something === false && userInput !== '' ? 'Books not found, please refine your search results' : ''}
      </div>
    </>
  );
}

export default Searchresult;
