import React, { useRef, useState } from 'react'
import Panel from './Panel'
import { CSSTransition } from 'react-transition-group'
import { ArrowDown, StarIcon } from '../icons';

interface Props {
  name: string;
  address: string;
  description?: string;
  rating: number;
  googleMapsLink?: string;
  hotelWebsiteLink?: string;
}

const HotelPanel = ({
  name,
  address,
  description,
  rating,
  googleMapsLink,
  hotelWebsiteLink,
}: Props) => {
  const hotelInfoRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const ratingStars = new Array(rating).fill(0).map((_, i) => (
    <StarIcon size={13} key={i} />
  ))

  return (
    <Panel position="top">
      <div className="tsc-hotel-panel">
        <div className="tsc-hotel-panel__rating">
          {ratingStars}
        </div>
        <div className="tsc-hotel-panel__name">
          {name}
        </div>
        <div className="tsc-hotel-panel__address">
          {address}
        </div>
        <CSSTransition
          in={expanded}
          nodeRef={hotelInfoRef}
          classNames="fade"
          unmountOnExit
          timeout={150}
        >
          <div ref={hotelInfoRef}>
            <div className="tsc-hotel-panel__description">
              {description}
            </div>
            <div className="tsc-hotel-panel__buttons">
              <button className="tsc-hotel-panel__button">Hotel Website</button>
              <button className="tsc-hotel-panel__button">View on Google Maps</button>
            </div>
          </div>
        </CSSTransition>

        <div className={`tsc-hotel-panel__toggle ${expanded ? 'tsc-hotel-panel__toggle--expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
          <ArrowDown size={20} fill="#898e94" />
        </div>
      </div>
    </Panel>
  )
}

export default HotelPanel
