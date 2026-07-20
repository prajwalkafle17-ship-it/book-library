function BookCard({
  title,
  author,
  category,
  price,
  rating,
  image,
  removeBook,
  id,
}) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>
        <strong>Author:</strong> {author}
      </p>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Price:</strong> {price}
      </p>

      <p>
        <strong>Rating:</strong> ⭐{rating}
      </p>

      <button
        className="remove-btn"
        onClick={() => removeBook(id)}
      >
        Remove Book
      </button>
    </div>
  );
}

export default BookCard;