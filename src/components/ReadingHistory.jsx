import Book from './Book.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ReadingHistory({ previouslyReadBooks, searchButtonGroup, onClickRemove }) {

    return (
        <div id="reading-history" className="panel">
            <h1>Previously Read</h1>
            <FontAwesomeIcon icon={faCheck} className="icon" />
            <hr></hr>
            <div className="book-container">
                {previouslyReadBooks.length > 0 && (
                    previouslyReadBooks.map((book, index) => 
                        <Book key={`history-${index}`} {...book} 
                            searchButtonGroup={searchButtonGroup}
                            onClickRemove={() => onClickRemove(book.id)}
                        />
                    )
                )}
            </div>
        </div>
    );
}