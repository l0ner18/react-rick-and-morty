import React from 'react'
import { Card } from '../../Card/Card'
import { Loader } from '../../UI/loader';
import { Paginator } from '../../UI/paginator';

export const HomePage = ({data, pressHandler, page}) => {
  return (
    <> 
    {data ? <div className='wrapper'>
          {data.map(el => (
              <Card data={el} key={el.id} />
          ))}
          <Paginator pages={6} pressHandler={pressHandler} page={page}/>
      </div> : <Loader/>}
    </>
  )
}
