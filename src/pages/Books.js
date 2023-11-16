import { useState } from "react";

function Books() {
  const [bookList, setBookList] = useState([
    {
      cover:
        "https://mir-s3-cdn-cf.behance.net/project_modules/hd/a257a734327997.56ccd58c75f83.jpg",
      id: 1,
      title: "The Mysterious Island",
      author: "Julio Verne",
    },
    {
      cover:
        "https://almabooks.com/wp-content/uploads/2018/10/9781847497987.jpg",
      id: 2,
      title: "David Copperfield",
      author: "Charles Dickens",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF1000,1000_QL80_.jpg",
      id: 3,
      title: "Animal Farm",
      author: "George Orwell",
    },
    {
      cover: "https://images.booksense.com/images/867/080/9798495080867.jpg",
      id: 4,
      title: "Frankestein",
      author: "Mary Shelley",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/514nxI+qbcL._AC_UF1000,1000_QL80_.jpg",
      id: 5,
      title: "Dracula",
      author: "Bram Stoker",
    },
    {
      cover:
        "https://i.pinimg.com/originals/9d/52/be/9d52be28804be34589bbd623273f789f.jpg",
      id: 6,
      title: "Brave New World",
      author: "Aldous Huxley",
    },
    {
      cover: "https://pcbushi.files.wordpress.com/2017/10/imp.jpg?w=430&h=605",
      id: 7,
      title: "The Imp of the Perverse",
      author: "Edgar Allan Poe",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/A1RUVrZnIhL._AC_UF1000,1000_QL80_.jpg",
      id: 8,
      title: "Maus",
      author: "Art Spiegelman",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/41TZVCACEYL._AC_UF1000,1000_QL80_.jpg",
      id: 9,
      title: "The Good Women of China",
      author: "Xinran",
    },
    {
      cover:
        "https://m.media-amazon.com/images/I/71bh8SB8R0L._AC_UF1000,1000_QL80_.jpg",
      id: 10,
      title: "The Devil to Pay in the Backlands",
      author: "João Guimarães Rosa",
    },
  ]);

  return (
    <div className="books__list">
      {bookList.map((book) => (
        <div className="books" key={book.id}>
          <img className="book__cover" src={book.cover} alt="books covers" />
          <h2 className="book__title">{book.title}</h2>
          <p className="book__author">{book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Books;
