import Hero from './components/Hero.jsx';
import Search from './components/Search.jsx';
import ReadingHistory from './components/ReadingHistory.jsx';
import Wishlist from './components/Wishlist.jsx';

export default function App() {
  const books = JSON.parse(localStorage.getItem("books"));
  return (
    <>
      <header>
        <img src="src/assets/logo.png" alt="Brand logo" className="logo" />
      </header>
      <main>
        <Hero />
        <Search />
        <section id="user" className="user-section container">
          <ReadingHistory books={books}/>
          <Wishlist books={books}/>
        </section>
      </main>
    </>
  );
}
