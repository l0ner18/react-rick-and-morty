import React from 'react';
import s from './Card.module.css'

export const Card = ({data}) => {
    return(
        <div className={s.wrapper}>
            <div className={s.imgWrap}>
                <img src={data.image} alt="" />
            </div>
            <div className={s.content}>
                <h1 className={s.name}>{data.name}</h1>
                <p className={s.status}>
                    <span>{data.status}-{data.species}</span>
                </p>
                <p className={s.location}>
                    <span>Last known location:</span>
                    <p>{data.location.name}</p>
                </p>
                <p className={s.episode}>
                    <span>Fist seen in:</span>
                    <p>Mortynight Run</p>
                </p>
            </div>
        </div>
    )
}