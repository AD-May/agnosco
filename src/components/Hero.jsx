import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDown } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    const bannerRef = useRef(null);
    const [shadowStyle, setShadowStyle] = useState('');

    const handleMouseMove = event => {
        // Get the position and size of the banner element
        const { left, top, width, height } = bannerRef.current.getBoundingClientRect();

        // Calculate mouse x/y position relative to banner
        const x = event.clientX - left;
        const y = event.clientY - top;

        // Find center point of the banner
        const centerX = width / 2;
        const centerY = height / 2;

        // Find client cursor offset from the center of the banner
        const offsetX = (x - centerX) / 10;
        const offsetY = (y - centerY) / 10;

        setShadowStyle(`${offsetX}px ${offsetY}px 5px rgba(0, 0, 0, 0.25)`);
    };

    return (
      <div className="hero container">
        <div className="banner jumbotron container"
             ref={bannerRef}
             onMouseMove={handleMouseMove}
             style={{
                transition: "box-shadow 0.1 ease",
                boxShadow: shadowStyle,
             }}
        >
          <h1 className="display-2">Discover Your Next Favorite Read</h1>
          <h2>Search, Track, and Wishlist Books In a Snap!</h2>
        </div>
        <span>
          <a href="#searchbar" className="call-to-action">
            <p>Begin Exploring</p>
            <FontAwesomeIcon
              icon={faCircleDown}
              className="arrow-down"
            ></FontAwesomeIcon>
          </a>
        </span>
      </div>
    );
}