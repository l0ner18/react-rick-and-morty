import React from 'react'
import { Card } from '../../Card/Card'

export const HomePage = ({data}) => {
  return (
    <div className='wrapper'>
        {data.map(el => (
            <Card data={el} key={el.id} />
        ))}
    </div>
  )
}
