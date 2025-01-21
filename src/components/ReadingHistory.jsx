import Book from './Book.jsx';

export default function ReadingHistory({ books }) {
    const previouslyReadBooks = books.filter((book) => book.previouslyRead);

    return (
        <div id="reading-history" className="panel">
            <h3>Previously Read</h3>
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