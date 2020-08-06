import React from 'react'
import styles from './Day.module.scss'
import {format} from "date-fns";

function Day(props) {
    const {day} = props

    return (
        <div className={styles.day}>
            {/*{format(day, 'd')}*/}
            {day}
        </div>
    )
}

export default Day