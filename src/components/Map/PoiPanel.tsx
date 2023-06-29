import React from 'react'
import Panel from './Panel'
import { PoiProps } from './Map'
import { getDistanceLabel } from '../../services/mapService'
import { CarIcon, WalkIcon } from '../icons'

interface PoiPanelProps {
  image?: string,
  poi: PoiProps,
}

const PoiPanel = ({
  image,
  poi
}: PoiPanelProps) => {
  return (
    <Panel position="bottom">
      {image && (
        <img src={image} alt="" className="tsc-poi-image" />
      )}
      <div className="tsc-poi-content">
        <div className="tsc-poi-content__title">{poi.poi.name}</div>
        <div className="tsc-poi-content__text">{poi.description}</div>
        <div className="tsc-poi-content__distance">
          {poi.type === 'walk' ? (
            <WalkIcon size={16} />
          ) : (
            <CarIcon size={16} />
          )}
          <span>{getDistanceLabel(poi.time)} ({poi.distance.value}{poi.distance.unit})</span>
        </div>
      </div>
    </Panel>
  )
}

export default PoiPanel
