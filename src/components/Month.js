import React from 'react'
import Day from './Day'

export default function Month(month) {
  return (
    <div className='flex-1 grid grid=cols-7 grid-rows-5'>
        {month.currentMonth.map((row, i) => (
            <React.Fragment key={i}>
                {row.currentMonth.map((day, idx) => (
                    <Day day={day} key={idx} />
                ))}
            </React.Fragment>
        ))}
    </div>
  )
}
