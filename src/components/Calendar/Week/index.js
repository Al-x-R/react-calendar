import React from 'react'
import {addDays, format,
} from 'date-fns'
import Day from '../Day'


function Week(props) {
    const {weekStart} = props

    const weekDays = []
    for (let i = 1; i <= 7; i++) {
        weekDays.push(addDays(weekStart, i))
    }

    return (
        <tr>
            {weekDays.map(day => {
                return <Day day={format(day, 'd')}/>
            })}
        </tr>

    )
}

export default Week

