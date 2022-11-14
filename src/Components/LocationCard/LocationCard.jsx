import React from 'react'
import s from './LocationCard.module.scss'

export const LocationCard = () => {
  return (
    <div className={s.wrapper}>
        <div className={s.imgWrap}>
            <img src="./img/image.png" alt="" />
        </div>
        <div className={s.content}>
            <div>
                <p className={s.name}>Citadel of Ricks</p>
                <p className={s.mute}>Space station"</p>
            </div>
            <div className={s.avatars}>
                <div className={s.avatar}><img src="./img/avatar.png" alt="" /></div>
                <div className={s.avatar}><img src="./img/avatar.png" alt="" /></div>
                <div className={s.avatar}><span>+2</span></div>
            </div>
        </div>
    </div>
  )
}
