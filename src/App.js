import React, { useState, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import BookList from "./components/BookList";
import Basket from "./components/Basket";
import Search from "./components/Search";
import About from "./pages/About";
import data from "./models/books.json";

const App = () => {
  const [books, setBooks] = useState(data);
  const [bookcase, setBookcase] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addToBookcase = (id) => {
    setBookcase(bookcase.concat(books.filter((book) => book.id === id)));

    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = true;
          console.log(`The Book '${book.volumeInfo.title}' was clicked`);
          if (
            book.saleInfo.retailPrice !== undefined &&
            typeof book.saleInfo.retailPrice.amount == "number"
          ) {
            setTotal(total + book.saleInfo.retailPrice.amount);
          }
        }
        return book;
      }),
    ]);
  };

  const removeFromBookcase = (id) => {
    const bookToRemove = bookcase.find((book) => book.id === id);
    if (
      bookToRemove.saleInfo.retailPrice !== undefined &&
      typeof bookToRemove.saleInfo.retailPrice.amount == "number"
    ) {
      setTotal(total - bookToRemove.saleInfo.retailPrice.amount);
    }
    setBookcase(bookcase.filter((book) => book.id !== id));
    setBooks([
      ...books.map((book) => {
        if (book.id === id) {
          book.read = false;
        }
        return book;
      }),
    ]);
  };

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    console.log(url);
    const results = await fetch(url);
    console.log(results);
    if (!results.error) {
      let jsonResponse = await results.json();
      setBooks(jsonResponse.items);
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Fragment>
              <Header bookLength={bookcase.length} />
              <Search
                keyword={keyword}
                findBooks={findBooks}
                setKeyword={setKeyword}
              />
              <BookList
                books={books}
                stored="library"
                addToBookcase={addToBookcase}
                removeFromBookcase={removeFromBookcase}
              />
            </Fragment>
          }
        />
        <Route
          path="/bookcase"
          element={
            <Fragment>
              <Header bookLength={bookcase.length} />
              <Basket total={total} />
              <BookList
                hideAddButton={true}
                books={bookcase}
                stored="bookcase"
                addToBookcase={addToBookcase}
                removeFromBookcase={removeFromBookcase}
              />
            </Fragment>
          }
        />
        <Route
          path="/about"
          element={
            <Fragment>
              <Header bookLength={bookcase.length} />
              <About bookLength={bookcase.length} />
            </Fragment>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
