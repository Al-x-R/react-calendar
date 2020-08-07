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
        // const startMonth = dateFns.startOfMonth(currentDate)
        // const endMonth = dateFns.endOfMonth(currentDate)
        // // month
        // const fullMonth = dateFns.eachDayOfInterval({
        //     start: startMonth,
        //     end: endMonth
        // })
        // const fullMonthDates = fullMonth.map((day) => {
        //     return dateFns.format(day, 'd')
        // })
        // // weeks
        // const weekDay = dateFns.getDay(currentDate)
        // const weeksInMonth = dateFns.getWeeksInMonth(
        //     currentDate, { weekStartsOn: 1 }
        // )
        // //days
        // const days = dateFns.eachDayOfInterval({
        //     start: startMonth,
        //     end: endMonth
        // })
        // const weekEnds = dateFns.eachWeekendOfInterval({
        //     start: startMonth,
        //     end: endMonth
        // })
        // const weekEndsDays = weekEnds.map((day) => {
        //     return dateFns.format(day, 'd')
        // })
        // let startWeek = dateFns.startOfWeek(currentDate, { weekStartsOn: 1 })
        // // startWeek = dateFns.format(startWeek, 'd')
        //
        // let endWeek = dateFns.lastDayOfWeek(currentDate, { weekStartsOn: 1 })
        // // endWeek = dateFns.format(endWeek, 'd')
        // // console.log(endWeek)
        //
        // let weekDays = dateFns.eachDayOfInterval({
        //     start: startWeek,
        //     // start: new Date(2020, 7, 27),
        //     end: endWeek
        //     // end: new Date(2020, 8, 2)
        // })
        //
        //
        //
        // const daysInMonth = dateFns.getDaysInMonth(currentDate)
        // const currentMonthDays = [];
        // for (let i = 1; i < daysInMonth + 1; i++) {
        //     currentMonthDays.push({
        //         day: i
        //     });
        // }

        return (
            <article className={styles.calendar}>
                <section className={styles.left}>
                    <span >{format(currentDate, 'EEEE')}</span>
                    <span >{format(currentDate, 'd')}</span>
                </section>
                <section className={styles.right}>

                    <Month currentDate={currentDate}/>
                </section>

            </article>

        );
    }
}

export default Calendar;