import Book from './Book.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ReadingHistory({ books }) {
    const previouslyReadBooks = books.filter((book) => book.previouslyRead);

    return (
        <div id="reading-history" className="panel">
            <h1>Previously Read</h1>
            <FontAwesomeIcon icon={faCheck} className="icon" />
            <hr></hr>
            <div className="book-container">
                {books.length && (
                    previouslyReadBooks.map((book, index) => 
                        <Book key={`history-${index}`} {...book} 
                            searchResultBook={false}
                        />
                    )
                )}
            </div>
        </div>
    );
}