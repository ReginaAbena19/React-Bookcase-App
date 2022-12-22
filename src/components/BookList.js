import React from "react";
import Book from "./Book";
import PropTypes from "prop-types";

const BookList = ({ books, ...props }) => {
  return (
    <div className="list">
      <div>
        {props.stored === "library" && <h2>Popular Reads</h2>}
        {books.length === 0 ? (
          <div className="emptybasket">Your bookcase is empty, get adding!</div>
        ) : (
          books.map((book) => (
            <Book
              hideAddButton={props.hideAddButton}
              key={`${book.id}|${book.etag}`}
              book={book}
              {...props}
            />
          ))
        )}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default BookList;
