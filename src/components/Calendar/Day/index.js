import React from 'react'
import styles from './Day.module.scss'

function Day(props) {
const {day} = props

    return (<td className={styles.day}>{day}</td>)
}

export default Day