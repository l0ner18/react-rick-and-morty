import React from 'react'
import { EpisodesCard } from '../../EpisodesCard/EpisodesCard'
import { LocationCard } from '../../LocationCard/LocationCard'
import s from './CharacterPage.module.scss'

export const CharacterPage = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.bgWrapper}>
          <img src="./img/avatar.png" alt=""/>
          <div className={s.blurLayer}></div>
        </div>
        <div className='container'>
          <div className={s.infoBlock}>
            <div className={s.avatar}>
              <img src="./img/avatar.png" alt="" />
            </div>
            <div className={s.content}>
              <div>
                <h1>Rick Sanchez</h1>
                <span className={s.withDot}>Alive-Human</span>
              </div>
              <div>
                <p>Last known location:</p>
                <span>Mortynight Run</span>
              </div>
              <div>
                <p>Fist seen in:</p>
                <span>Citadel of Ricks</span>
              </div>
            </div>
          </div>
          <section>
            <h1 className={s.sectionTitle}>Locations</h1>
            <div className={s.cardRow}>
              <LocationCard/>
              <LocationCard/>
              <LocationCard/>
              <LocationCard/>
            </div>
          </section>
          <section>
            <h1 className={s.sectionTitle}>Episodes</h1>
            <div className={s.cardRow}>
              <EpisodesCard/>
              <EpisodesCard/>
              <EpisodesCard/>
              <EpisodesCard/>
            </div>
          </section>
        </div>
    </div>
  )
}
