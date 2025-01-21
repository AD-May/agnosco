import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleInfo,
  faCheck,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

export default function ButtonGroup({ link, onClickPreviouslyRead, onClickWishlisted }) {
  return (
    <>
      <div className="button-container">
        {link && (
          <a
            href={link}
            className="btn btn-secondary info-link"
            data-toggle="tooltip"
            data-placement="top"
            title="Get more info"
            aria-label="Visit info page"
          >
            <FontAwesomeIcon icon={faCircleInfo} className="info" />
          </a>
        )}
        <button
          className="btn btn-dark history-btn"
          onClick={onClickPreviouslyRead}
          data-toggle="toolip"
          data-placement="top"
          title="Add to reading history"
          aria-label="Add to reading history"
        >
          <FontAwesomeIcon icon={faCheck} className="check" />
        </button>
        <button
          className="btn btn-success wishlist-btn"
          onClick={onClickWishlisted}
          data-toggle="tooltip"
          data-placement="top"
          title="Add to wishlist"
          aria-label="Add to wishlist"
        >
          <FontAwesomeIcon icon={faGift} className="gift" />
        </button>
      </div>
    </>
  );
}
