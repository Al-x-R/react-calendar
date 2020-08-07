import React from 'react'
import {getDay, getWeeksInMonth,
    startOfWeek, lastDayOfWeek, addDays, format,
} from 'date-fns'
import Day from '../Day'


function Week(props) {
    const {weekStart, currentDate} = props

    const weekDay = getDay(currentDate)
    const weeksInMonth = getWeeksInMonth(
        currentDate, { weekStartsOn: 1 }
    )
    let startWeek = startOfWeek(currentDate, { weekStartsOn: 1 })
    let endWeek = lastDayOfWeek(currentDate, { weekStartsOn: 1 })

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

