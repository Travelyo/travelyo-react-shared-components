import React, { useRef, useState } from 'react'
import Panel from './Panel'
import { CSSTransition } from 'react-transition-group'
import { ArrowDown, LinkIcon, ShareIcon, StarIcon } from '../icons';
import { HotelPanelProps } from '../../interfaces/interfaces';
import t from '../../services/translatorService'; 

interface Props {
  hotel: HotelPanelProps;
  onHotelLinkClick?: () => void,
  onWebsiteLinkClick?: () => void,
}

const HotelPanel = ({
  hotel,
  onHotelLinkClick,
  onWebsiteLinkClick,
}: Props) => {
  const {
    name,
    address,
    description,
    rating,
    googleMapsLink,
    hotelWebsiteLink,
  } = hotel;
  const hotelInfoRef = useRef(null);
  const [expanded, setExpanded] = useState(window.innerWidth > 768);

  const ratingStars = new Array(rating).fill(0).map((_, i) => (
    <StarIcon size={13} key={i} />
  ))

  return (
    <Panel position="top" className="tsc-map-panel__hotel">
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
            {(hotelWebsiteLink || googleMapsLink) && (
              <div className="tsc-hotel-panel__buttons">
                {hotelWebsiteLink && (
                  <a href={hotelWebsiteLink} onClick={onHotelLinkClick} target="_blank" className="tsc-hotel-panel__button">
                    <LinkIcon />
                    <span>{t('dyn-package.sharedMap.hotelWebsite')}</span>
                  </a>
                )}
                {googleMapsLink && (
                  <a href={googleMapsLink} onClick={onWebsiteLinkClick} target="_blank" className="tsc-hotel-panel__button">
                    <ShareIcon />
                    <span>{t('dyn-package.sharedMap.showOnMap')}</span>
                  </a>
                )}
              </div>
            )}
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
