import React from 'react'
import Panel from './Panel'

interface Props {
  
}

const HotelPanel = (props: Props) => {
  return (
    <Panel position="top">
      <div className="tsc-hotel-panel">
        <div className="tsc-hotel-panel__name">
          Divani Apollon Palace & Thalasso
        </div>
        <div className="tsc-hotel-panel__address">
          10 Ag. Nikolaou & Iliou Str., Athens, Greece
        </div>
        <div className="tsc-hotel-panel__description">
          This hotel is located at a captivating coastal suburb near Athens, offering stunning beaches, upscale shopping, vibrant nightlife, and a convenient gateway to explore ancient history and neighboring towns.
        </div>
        <div className="tsc-hotel-panel__buttons">
          <button>Hotel Website</button>
          <button>View on Google Maps</button>
        </div>
      </div>
    </Panel>
  )
}

export default HotelPanel
