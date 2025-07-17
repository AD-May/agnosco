import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Book from './Book.jsx';

export default function Search({ onStore }) {
    const [query, setQuery] = useState("");
    const [booklist, setBooklist] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const maxResults = 20;

    const apiKey = "AIzaSyCq543G-0Cmi3iz_mU9c9MWXnKMmAaBqFA";
    const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${apiKey}`;
    const startIndex = (pageIndex - 1) * 5;
    const endIndex = startIndex + 5;
    const currentBooks = booklist.length !== 0 ? booklist.slice(startIndex, endIndex) : [];

    function processEnter(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    async function handleSearch() {
        setPageIndex(1);
        try {
            const response = await fetch(requestUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            if (!json) {
                alert("Could not find any books for that query \u{1f622}");
            }
            setBooklist(json.items);
        } catch (err) {
            console.error("The request to the Google Books API failed", err);
        }
    }

    function getBookProps(book) {
        const { volumeInfo } = book;
        const authors = volumeInfo.authors ?? null;
        const imageLinks = volumeInfo.imageLinks ?? null;
        const thumbnail = imageLinks?.thumbnail ?? null;
        const infoLink = volumeInfo.infoLink ?? null;
        const industryIdentifiers = volumeInfo.industryIdentifiers ?? null;
        const title = volumeInfo.title ?? null;
        const isbn = industryIdentifiers ? industryIdentifiers[0].identifier : null;


        return {
            id: book.id,
            authors: authors?.join(),
            title: title,
            image: thumbnail,
            isbn: isbn,
            link: infoLink,
            previouslyRead: false,
            wishlisted: false
        }
    }

    function handlePreviousResults() {
        if (pageIndex > 1) {
            setPageIndex(pageIndex - 1);
        }
    }

    function handleNextResults() {
        if (booklist.length > pageIndex * 5) {
            setPageIndex(pageIndex + 1);
        }
    }

    function storePreviouslyRead(bookProps) {
      const book = {
        ...bookProps,
        previouslyRead: true,
      };
      localStorage.setItem(`${bookProps.id}`, JSON.stringify(book));
      onStore()
    };

    function storeWishlisted(bookProps) {
      const book = {
        ...bookProps,
        wishlisted: true,
      };
      localStorage.setItem(`${bookProps.id}`, JSON.stringify(book));
      onStore()
    };

    return (
      <section id="search">
        <search id="searchbar">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
          <input
            placeholder="Search by Author, Book Title, or ISBN"
            id="input"
            className="form-control"
            aria-label="Type search query here"
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => processEnter(e, requestUrl)}
          />
          <button
            id="search-btn"
            className="btn btn-success"
            onClick={handleSearch}
          >
            Search
          </button>
        </search>
        {currentBooks.length !== 0 && (
          <div id="search-results">
            <button
              className="btn btn-outline-secondary"
              onClick={handlePreviousResults}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            {currentBooks.map((book, index) => {
              const props = getBookProps(book);
              return (
                <Book
                  key={index}
                  {...props}
                  onClickPreviouslyRead={() => storePreviouslyRead(props)}
                  onClickWishlisted={() => storeWishlisted(props)}
                  searchButtonGroup={true}
                />
              );
            })}
            <button
              className="btn btn-outline-secondary"
              onClick={handleNextResults}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        )}
      </section>
    );
}