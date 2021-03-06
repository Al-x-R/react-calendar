import React from 'react'
import {addDays, format, startOfWeek} from 'date-fns'
import Day from '../Day'
import PropTypes from "prop-types";


function Week(props) {
    const {date, currentDate} = props

    const weekStart = startOfWeek(date)
    const weekDays = []
    for (let i = 1; i <= 7; i++) {
        weekDays.push(addDays(weekStart, i))
    }

    return (
        <tr>
            {weekDays.map(date => {
                return <Day key={format(date, 'yyyy-MM-dd')}
                            date={date}
                            currentDate={currentDate}/>
            })}
        </tr>
    )
}

Week.propTypes = {
    date: PropTypes.instanceOf(Date),
    currentDate: PropTypes.instanceOf(Date),
}

Week.defaultProps = {
    date: new Date(),
    currentDate: new Date(),
}

export default Week

