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

  function updateFromStorage() {
      const newBooks = [];

      for (let i = 0; i < localStorage.length; i++) {
        const currentBookKey = localStorage.key(i);
        const currentBook = localStorage.getItem(currentBookKey);
        try {
          const currentBookJSON = JSON.parse(currentBook);
          newBooks.push(currentBookJSON);
        }
        catch (error) {
          if (error instanceof TypeError) {
            console.error("Tried to parse a localStorage element that was not of type 'JSON'");
          }
          console.log(error);
        }
      }

      setStoredBooks(newBooks);
  }

  function removeFromLibrary(bookId) {
    localStorage.removeItem(bookId);
    updateFromStorage();
  }

  return (
    <>
      <div className="container">
        <header>
          <img src="src/assets/logo.png" alt="Brand logo" className="logo" />
        </header>
          <Hero />
          <Search onStore={updateFromStorage} />
      </div>
      <img src="src/assets/wave-design.png" className="wave-design" />
      <section id="user-data" className="user-section container">
        <ReadingHistory 
          previouslyReadBooks={storedBooks.filter(book => book.previouslyRead)} 
          searchButtonGroup={false} 
          onClickRemove={removeFromLibrary} 
        />
        <Wishlist 
          wishlistedBooks={storedBooks.filter(book => book.wishlisted)} 
          searchButtonGroup={false} 
          onClickRemove={removeFromLibrary} 
        />
      </section>
    </>
  );
}
