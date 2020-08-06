import React, {Component} from 'react'
import styles from './Calendar.module.scss'
import * as dateFns from 'date-fns'
import Month from './../Month'
// import Week from './../Week'
import Day from './../Day'

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
        const startMonth = dateFns.startOfMonth(currentDate)
        const endMonth = dateFns.endOfMonth(currentDate)
        // month
        const fullMonth = dateFns.eachDayOfInterval({
            start: startMonth,
            end: endMonth
        })
        const fullMonthDates = fullMonth.map((day) => {
            return dateFns.format(day, 'd')
        })
        // weeks
        const weekDay = dateFns.getDay(currentDate)
        const weeksInMonth = dateFns.getWeeksInMonth(
            currentDate, { weekStartsOn: 1 }
        )
        //days
        const days = dateFns.eachDayOfInterval({
            start: startMonth,
            end: endMonth
        })
        const weekEnds = dateFns.eachWeekendOfInterval({
            start: startMonth,
            end: endMonth
        })
        const weekEndsDays = weekEnds.map((day) => {
            return dateFns.format(day, 'd')
        })
        let startWeek = dateFns.startOfWeek(currentDate, { weekStartsOn: 1 })
        // startWeek = dateFns.format(startWeek, 'd')

        let endWeek = dateFns.lastDayOfWeek(currentDate, { weekStartsOn: 1 })
        // endWeek = dateFns.format(endWeek, 'd')
        // console.log(endWeek)

        let weekDays = dateFns.eachDayOfInterval({
            start: startWeek,
            // start: new Date(2020, 7, 27),
            end: endWeek
            // end: new Date(2020, 8, 2)
        })

        weekDays = weekDays.map((day) => {
            return dateFns.format(day, 'd')
        })

        // console.log(weekDays)

        const daysInMonth = dateFns.getDaysInMonth(currentDate)
        const currentMonthDays = [];
        for (let i = 1; i < daysInMonth + 1; i++) {
            currentMonthDays.push({
                day: i
            });
        }
        console.log(currentMonthDays)


        return (
            <article>
                <section>

                    <Day day={currentMonthDays.map((day) => {
                        return day
                    }) }/>
                    {/*{currentDate.toLocaleDateString()}*/}
                    <Month currentDate={currentDate}/>
                </section>



                <button onClick={() => {
                    this.setState({
                        currentDate: dateFns.add(currentDate, {
                            days: 1
                        })
                    })
                }}>add day</button>
            </article>

        );
    }
}

export default Calendar;