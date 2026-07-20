import { useState, useEffect } from "react";
import "./App.css";
import booksData from "./data/books";
import BookCard from "./components/BookCard";

function App() {
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState("All");

  // Load books from Local Storage
  useEffect(() => {
    const savedBooks = localStorage.getItem("books");

    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      setBooks(booksData);
    }
  }, []);

  // Save books to Local Storage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  // Remove a book
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Categories
  const categories = [
    "All",
    "Fantasy",
    "Novel",
    "Finance",
    "Productivity",
    "Self Development",
  ];

  // Filter books
  const filteredBooks =
    category === "All"
      ? books
      : books.filter((book) => book.category === category);

  return (
    <div className="app">
      <h1>📚 Book Library App</h1>

      <h3>Total Books : {filteredBooks.length}</h3>

      <h4>Current Category : {category}</h4>

      {/* Category Buttons */}
      <div className="filters">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Display Books */}
      <div className="books-container">
        {filteredBooks.length === 0 ? (
          <h2 className="empty-message">
            No Books Available in this Category.
          </h2>
        ) : (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
              price={book.price}
              rating={book.rating}
              image={book.image}
              removeBook={removeBook}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;