import React from 'react'
import { useTranslation } from 'react-i18next'

import VerticalCard from '../cards/VerticalCard'

import './DiscoverSection.css'

const DiscoverSection = ({ title, data, isArtist, fromSearch, isPlaylist }) => {
  // to translate from language files
  const { t } = useTranslation('translation', { keyPrefix: 'searchpage' })

  return (
    <div className='discover-section'>
      <div className='discover-section-header'>
        {/* ROW HEADER */}
        <h2>{title}</h2>
        <div className='discover-see-all'>{t('see_all')}</div>
      </div>
      {/* OBJECT KEYS CHANGE DEPENDING ON PAGE, RENDER ACCORDINGLY */}
      {!fromSearch ? (
        <div className='discover-section-card-container'>
          {data.list.map((item) => (
            <React.Fragment key={item.id}>
              <VerticalCard
                data={item}
                isArtist={isArtist}
                isPlaylist={isPlaylist}
              />
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className='discover-section-card-container'>
          {data.items.map((item) => (
            <React.Fragment key={item.id}>
              <VerticalCard
                data={item}
                isArtist={isArtist}
                isPlaylist={isPlaylist}
              />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default DiscoverSection
