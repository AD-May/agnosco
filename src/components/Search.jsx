import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchResults from './SearchResults';

export default function Search() {
    const [booklist, setBooklist] = useState(null);

    return (
        <section id="search">
            <search id="searchbar">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input placeholder="Search by Author, Book Title, ISBN, etc." 
                className="form-control" aria-label="Type search query here" />
                <button id="search-btn" className="btn btn-success">Search</button>
            </search>
            <SearchResults />
        </section>    
    );
}