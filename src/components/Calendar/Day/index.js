import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {isSameDay, isSameMonth} from "date-fns"
import styles from './Day.module.scss'

function Day(props) {
    const {day, date, currentDate, className} = props

    const classNameStr = classNames(className, {
        [styles.currentDate]: isSameDay(date, currentDate),
        [styles.currentMonth]: isSameMonth(date, currentDate),
    })
    console.log(classNameStr)

    return (
        <td className={classNameStr}>{day}</td>
    )
}

Day.propTypes = {
    day: PropTypes.string.isRequired,
    className: PropTypes.string,
}

Day.defaultProps = {
    className: styles.day,
}

export default Day