import React from 'react'
import PropTypes from 'prop-types'
import styles from './Calendar.module.scss'
import {format} from 'date-fns'
import Month from './Month'

const Calendar = props => {
    const {currentDate, date} = props

    return (
        <article className={styles.calendar}>
            <section className={styles.left}>
                <span className={styles.currentDayName}>{format(date, 'EEEE')}</span>
                <span className={styles.currentDayNumber}>{format(date, 'd')}</span>
            </section>
            <section className={styles.right}>
                <Month key={format(currentDate, 'yo-MM-d')}
                       date={date}
                       currentDate={currentDate}/>
            </section>
        </article>
    )
}

Calendar.propTypes = {
    currentDate: PropTypes.instanceOf(Date),
    date: PropTypes.instanceOf(Date),
}

Calendar.defaultProps = {
    currentDate: new Date(),
    date: new Date(),
}

export default Calendar