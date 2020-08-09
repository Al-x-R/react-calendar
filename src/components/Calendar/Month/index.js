import React from 'react'
import Week from '../Week'
import {startOfMonth, endOfMonth, eachWeekOfInterval, format} from "date-fns";
import styles from './Month.module.scss'

function Month(props) {
    const {currentDate} = props

    const startMonth = startOfMonth(currentDate)
    const endMonth = endOfMonth(currentDate)

    const weeks = eachWeekOfInterval({
        start: startMonth,
        end: endMonth
    })


    return (
        <table className={styles.table}>
            <caption className={styles.wrap}>
                <span className={styles.currentDate}>{format(currentDate, 'MMMM Y')}</span>
            </caption>
            <tr className={styles.tHead}>
                <th>M</th>
                <th>T</th>
                <th>W</th>
                <th>T</th>
                <th>F</th>
                <th>S</th>
                <th>S</th>
            </tr>

            {weeks.map((week) => {
                return (
                    <tbody className={styles.days}>
                    <Week weekStart={week}/>
                    </tbody>
                )
            })}
        </table>
    )
}


export default Month