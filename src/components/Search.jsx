import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Book from './Book.jsx';

export default function Search() {
    const [query, setQuery] = useState("");
    const [booklist, setBooklist] = useState(null);
    const [pageIndex, setPageIndex] = useState(1);

    const apiKey = "key=AIzaSyCq543G-0Cmi3iz_mU9c9MWXnKMmAaBqFA";
    const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=5&startIndex=${pageIndex}&key=${apiKey}`;

    const processEnter = (event, query) => {
        if (event.key === "Enter" && query) {
            handleSearch(query);
        }
    }

    const handleSearch = async requestUrl => {
        try {
            const response = await fetch(requestUrl);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            if (!json) {
                alert("Could not find any books for that query.")
            }
            setPageIndex()
            setBooklist(json);
        } catch (err) {
            console.error("The request to the Google Books API failed", err);
        }
    }

    console.log(booklist);

    const getBookProps = book => {
        const { volumeInfo } = book;
        const { authors, imageLinks, infoLink, industryIdentifiers} = volumeInfo;
        const { thumbnail } = imageLinks;

        return {
            authors: authors?.join() || "No author(s) available",
            image: thumbnail || "No image available",
            isbn: industryIdentifiers[0] || "No ISBN available",
            link: infoLink || "No info link available"
        }
    }


    return (
        <section id="search">
            <search id="searchbar">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input placeholder="Search by Author, Book Title, or ISBN" 
                    id="input"
                    className="form-control" aria-label="Type search query here" 
                    onChange={e => setQuery(e.target.value)} 
                    onKeyDown={e => processEnter(e, requestUrl)}
                />
                <button id="search-btn" className="btn btn-success" onClick={() => handleSearch(requestUrl)}>
                    Search
                </button>
            </search>
            {booklist && (
                <div id="search-results">
                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-left"></i>
                    </button>
                    {booklist.map((book) => {
                        const props = getBookProps(book);
                        <Book key={book.id} {...props} />
                    })}
                    <button className="btn btn-outline-secondary">
                        <i className="bi bi-arrow-right"></i>
                    </button>
                </div>
            )}
        </section>    
    );
}