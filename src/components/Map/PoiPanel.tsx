import React from 'react'
import Panel from './Panel'

interface PoiPanelProps {
  image?: string,
}

const PoiPanel = ({
  image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVzLmrm0yxmDac2zSg8y0RDd-NT11kHgY3IQ&usqp=CAU',
}: PoiPanelProps) => {
  return (
    <Panel position="bottom">
      {image && (
        <img src={image} alt="" className="tsc-poi-image" />
      )}
      <div className="tsc-poi-content">
        <div className="tsc-poi-content__title">Posidonio Music Hall</div>
        <div className="tsc-poi-content__text">Dynamic music venue hosting diverse live performances and events.</div>
        <div className="tsc-poi-content__distance">30 minutes (2km)</div>
      </div>
    </Panel>
  )
}

export default PoiPanel
