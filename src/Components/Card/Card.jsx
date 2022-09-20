import React from 'react';
import s from './Card.module.css'

export const Card = ({data}) => {
    return(
        <div className={s.wrapper}>
            <div className={s.imgWrap}>
                <img src={data.img} alt="" />
            </div>
            <div className={s.content}>
                <h1>{data.name}</h1>
                {data.price === 0 ? <p className={s.free}>Free</p>  
                :
                 <p className={s.price}>{data.price}</p>}
            </div>
        </div>
    )
}