import ButtonGroup from './ButtonGroup.jsx';

export default function Book(props) {

    const authorString = props.authors?.split(",").join(", ");

    return (
      <div className="book">
        {props.image ? (
          <img
            src={`${props.image}`}
            alt={`An image of ${props.title ?? "book"}`}
          />
        ) : (
          <h3 className="img-replacement">
            No Cover Image Found
          </h3>
        )}
        <h6>{props.title ?? "No title available"}</h6>
        <p>{authorString ?? "No authors available"}</p>
        <p>
          <em>ISBN: {props.isbn ?? "No ISBN available"}</em>
        </p>
        <ButtonGroup {...props} />
      </div>
    );
}