import React, { useRef, useState } from 'react'
import Panel from './Panel'
import { CSSTransition } from 'react-transition-group'

interface Props {
  
}

const HotelPanel = (props: Props) => {
  const hotelInfoRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <Panel position="top">
      <div className="tsc-hotel-panel">
        <div className="tsc-hotel-panel__name">
          Divani Apollon Palace & Thalasso
        </div>
        <div className="tsc-hotel-panel__address">
          10 Ag. Nikolaou & Iliou Str., Athens, Greece
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
              This hotel is located at a captivating coastal suburb near Athens, offering stunning beaches, upscale shopping, vibrant nightlife, and a convenient gateway to explore ancient history and neighboring towns.
            </div>
            <div className="tsc-hotel-panel__buttons">
              <button className="tsc-hotel-panel__button">Hotel Website</button>
              <button className="tsc-hotel-panel__button">View on Google Maps</button>
            </div>
          </div>
        </CSSTransition>

        <div className="tsc-hotel-panel__toggle" onClick={() => setExpanded(!expanded)}>
          toggle
        </div>
      </div>
    </Panel>
  )
}

export default HotelPanel
