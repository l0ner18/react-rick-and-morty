import React from 'react'

export const Paginator = ({pages, pressHandler, page}) => {
    let arrPages = []

    for (let i = 1; i <= pages; i++) {
        arrPages.push(i);
    }

    return (
        <div className='paginator-wrapper'>
            {arrPages.map(el => (
                <p key={el} 
                onClick={() => pressHandler(el)}
                className={page === el ? 'paginator-wrapper__item active' : 'paginator-wrapper__item'}>
                    {el}
                </p>
            ))}
        </div>
    )
}

