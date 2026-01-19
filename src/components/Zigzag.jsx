import React from 'react';

/**
 * Zigzag - A reusable SVG divider component
 * Used throughout the portfolio to create visual separation between sections
 */
const Zigzag = () => {
  return (
    <div className="zigzag wow slideInLeft">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 105 20"
        xmlSpace="preserve"
      >
        <g>
          <rect className="st0" width={105} height={20} />
          <g>
            <polyline
              className="st1"
              points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
            />
          </g>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 105 20"
        xmlSpace="preserve"
      >
        <g>
          <rect className="st0" width={105} height={20} />
          <g>
            <polyline
              className="st1"
              points="2.5,5 16.8,15 31.1,5 45.3,15 59.6,5 73.9,15 88.2,5 102.5,15   "
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Zigzag;

