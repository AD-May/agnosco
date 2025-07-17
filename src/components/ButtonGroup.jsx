import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCheck,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export default function ButtonGroup(props) {
  return (
    <>
      <div className="button-container">
        {props.link && (
          <a
            href={props.link}
            className="btn btn-secondary info-link"
            data-toggle="tooltip"
            data-placement="top"
            title="Get more info"
            aria-label="Visit info page"
          >
            <FontAwesomeIcon icon={faCircleInfo} className="info" />
          </a>
        )}
        {props.searchButtonGroup ? (
          <>
            <button
              className="btn btn-dark history-btn"
              onClick={props.onClickPreviouslyRead}
              data-toggle="toolip"
              data-placement="top"
              title="Add to reading history"
              aria-label="Add to reading history"
            >
              <FontAwesomeIcon icon={faCheck} className="check" />
            </button>
            <button
              className="btn btn-success wishlist-btn"
              onClick={props.onClickWishlisted}
              data-toggle="tooltip"
              data-placement="top"
              title="Add to wishlist"
              aria-label="Add to wishlist"
            >
              <FontAwesomeIcon icon={faGift} className="gift" />
            </button>
          </>
        ) : (
          <button
            className="btn btn-outline-danger btn-block"
            aria-label="Remove from section"
            onClick={props.onClickRemove}
          >
            Remove
          </button>
        )}
      </div>
    </>
  );
}
