import React from 'react'
import PropTypes from 'prop-types'
import Week from '../Week'
import {startOfMonth, endOfMonth, eachWeekOfInterval, format} from "date-fns";
import styles from './Month.module.scss'

function Month(props) {
    const {date, currentDate} = props

    const startMonth = startOfMonth(date)
    const endMonth = endOfMonth(date)

    const weeksOfMonth = eachWeekOfInterval({
        start: startMonth,
        end: endMonth
    })


    return (
        <table className={styles.table}>
            <caption className={styles.wrap}>
                <span className={styles.currentDate}>{format(date, 'MMMM Y')}</span>
            </caption>
            <thead>
                <tr className={styles.tHead}>
                    <th>M</th>
                    <th>T</th>
                    <th>W</th>
                    <th>T</th>
                    <th>F</th>
                    <th>S</th>
                    <th>S</th>
                </tr>
            </thead>


            {weeksOfMonth.map((monday) => {
                return (
                    <tbody className={styles.days}>
                        <Week key={format(monday, 'yyyy-I')}
                              date={monday}
                              currentDate={currentDate}/>
                    </tbody>
                )
            })}
        </table>
    )
}

Month.propTypes = {
    date: PropTypes.instanceOf(Date),
    currentDate: PropTypes.instanceOf(Date),
}

Month.defaultProps = {
    date: new Date(),
    currentDate: new Date(),
}


export default Month