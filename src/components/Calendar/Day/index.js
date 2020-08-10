import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {format, isSameDay, isSameMonth} from "date-fns"
import styles from './Day.module.scss'

function Day(props) {
    const {date, currentDate, className} = props

    const classNameStr = classNames(className, {
        [styles.currentDate]: isSameDay(date, currentDate),
        [styles.currentMonth]: isSameMonth(date, currentDate),
    })

    return (
        <td className={classNameStr}>{format(date, 'd')}</td>
    )
}

Day.propTypes = {
    date: PropTypes.object.isRequired,
    className: PropTypes.string,
}

Day.defaultProps = {
    className: styles.day,
}

export default Day