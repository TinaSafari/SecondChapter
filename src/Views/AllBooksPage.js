import React from "react";
import { Link } from "react-router-dom";
import { BooksArray } from "../Components/BooksArray";
import Card from "react-bootstrap/Card";

function AllBooksPage(props) {

  return (
    <>
      <h3>All Books</h3>
      <hr />
      <div className="bookshelf">
        {BooksArray.map((book) => {
          {
            console.log(book.Title);
          }
          return (
            <Card
            style={{ width: '13rem', height: '30rem', marginBottom: '30px'  }}
            >
              {console.log(book.Title)}
              <Link to={"./SingleBookInfo/" + book.id}>
                <Card.Img
                  key={book.id}
                  variant="top"
                  src={book.imageUrl}
                  style={{ height: "300px" }}
                />
              </Link>
              <Card.Body>
                <Card.Title>{book.Title}</Card.Title>
                <Card.Text>Author: {book.Author}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default AllBooksPage;
