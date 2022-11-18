import React from 'react'
import s from './LocationCard.module.scss'

export const LocationCard = ({episode}) => {
  return (
    <div className={s.wrapper}>
        <div className={s.imgWrap}>
            <img src="/img/image.png" alt="" />
        </div>
        <div className={s.content}>
            <div>
                <p className={s.name}>{episode.name}</p>
                <p className={s.mute}>{episode.episode}</p>
            </div>
            <div className={s.avatars}>
                <div className={s.avatar}><img src={episode.charactersImages[0]} alt="" /></div>
                <div className={s.avatar}><img src={episode.charactersImages[1]} alt="" /></div>
                <div className={s.avatar}><span>+{episode.characters.length - 2}</span></div>
            </div>
        </div>
    </div>
  )
}
