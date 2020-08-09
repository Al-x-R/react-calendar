import React, {Component} from 'react'
import styles from './Calendar.module.scss'
import {format} from 'date-fns'
import Month from './Month'

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: new Date(),
            selectedDate: null
        }
    }

    render() {
        const {currentDate} = this.state

        return (
            <article className={styles.calendar}>
                <section className={styles.left}>
                    <span className={styles.currentDayName}>{format(currentDate, 'EEEE')}</span>
                    <span className={styles.currentDayNumber}>{format(currentDate, 'd')}</span>
                </section>
                <section className={styles.right}>
                    <Month currentDate={currentDate}/>
                </section>
            </article>
        )
    }
}

export default Calendar