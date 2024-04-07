import React from 'react'


const CardNotification = ({title, description, date, time}) => {
  return (
    <div className='flex flex-col h-fit py-3 text-sm border-b-2'>
        {title && <h1 className='font-semibold'>{title}</h1>}
        {description && <p className='text-xs'>{description}</p>}
        {date && <p className='text-xs'>{date}</p>}
        {time && <p className='text-xs'>{time}</p>}
    </div>
  )
}

export default CardNotification