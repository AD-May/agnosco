import Book from './Book.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faG, faGift } from '@fortawesome/free-solid-svg-icons';

export default function Wishlist({ books }) {
    const wishlistedBooks = books.filter((book) => book.wishlisted);

    return (
        <div id="wishlist" className="panel">
            <h1>Wishlist</h1>
            <FontAwesomeIcon icon={faGift} className="icon" />
            <hr></hr>
            <div className="book-container">
                {books.length && (
                    wishlistedBooks.map((book, index) =>
                        <Book key={`wishlist-${index}`} {...book} 
                            searchResultBook={false}
                        />
                    )
                )}
            </div>
        </div>
    );
}