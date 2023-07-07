import React from 'react'
import Panel from './Panel'
import { PoiProps } from './Map'
import { getDistanceLabel } from '../../services/mapService'
import { CarIcon, WalkIcon } from '../icons'
import t from '../../services/translatorService'

interface PoiPanelProps {
  image?: string,
  poi: PoiProps,
}

const PoiPanel = ({
  image,
  poi
}: PoiPanelProps) => {
  return (
    <Panel position="bottom" className="tsc-map-panel__poi">
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
          <span>{getDistanceLabel(poi.time)} {poi.type ? t(`dyn-package.${poi.type}`) : ''} ({poi.distance.value} {t(`dyn-package.${poi.distance.unit}`)})</span>
        </div>
      </div>
    </Panel>
  )
}

export default PoiPanel
