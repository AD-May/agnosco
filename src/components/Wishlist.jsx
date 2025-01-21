import Book from './Book.jsx';

export default function Wishlist({ books }) {
    const wishlistedBooks = books.filter((book) => book.wishlisted);
    
    return (
        <div id="wishlist" className="panel">
            <h3>Wishlist</h3>
            <hr></hr>
            {books.length && (
                wishlistedBooks.map((book, index) =>
                    <Book key={`wishlist-${index}`} {...book} 
                        searchResultBook={false}
                    />
                )
            )}
        </div>
    );
}