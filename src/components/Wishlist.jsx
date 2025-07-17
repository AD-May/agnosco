import Book from './Book.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

export default function Wishlist({ wishlistedBooks, searchButtonGroup, onClickRemove }) {

    return (
        <div id="wishlist" className="panel">
            <h1>Wishlist</h1>
            <FontAwesomeIcon icon={faGift} className="icon" />
            <hr></hr>
            <div className="book-container">
                {wishlistedBooks.length && (
                    wishlistedBooks.map((book, index) =>
                        <Book key={`wishlist-${index}`} {...book} 
                            buttonType={searchButtonGroup}
                            onClickRemove={() => onClickRemove(book.id)}
                        />
                    )
                )}
            </div>
        </div>
    );
}