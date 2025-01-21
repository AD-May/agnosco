import { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Search from './components/Search.jsx';
import ReadingHistory from './components/ReadingHistory.jsx';
import Wishlist from './components/Wishlist.jsx';

export default function App() {
  const [storedBooks, setStoredBooks] = useState([]);
  
  useEffect(() => {
    updateFromStorage();
  },[])

  const updateFromStorage = () => {
      const newBooks = [];

      for (let i = 0; i < localStorage.length; i++) {
        const currentBookKey = localStorage.key(i);
        const currentBook = JSON.parse(localStorage.getItem(currentBookKey));
        newBooks.push(currentBook);
      }

      setStoredBooks(newBooks);
  }

  console.log(storedBooks)

  return (
    <div className="container">
      <header>
        <img src="src/assets/logo.png" alt="Brand logo" className="logo" />
      </header>
      <main>
        <Hero />
        <Search onStore={updateFromStorage} />
        <section id="user-data" className="user-section container">
          <ReadingHistory books={storedBooks} />
          <Wishlist books={storedBooks} />
        </section>
      </main>
    </div>
  );
}
