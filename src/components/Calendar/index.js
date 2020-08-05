import React, {Component} from 'react'
import styles from './Calendar.module.scss'
import * as dateFns from 'date-fns'
import Month from './../Month'
import Week from './../Week'

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: new Date()
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
            end: endWeek
        })

        weekDays = weekDays.map((day) => {
            return dateFns.format(day, 'd')
        })

        console.log(weekDays)




        return (
            <article>
                <div>
                    <Month month={fullMonthDates}/>
                    {/*{currentDate.toLocaleDateString()}*/}
                    <Week week={weekDays}/>
                </div>
                <button onClick={() => {
                    this.setState({
                        currentDate: dateFns.add(currentDate, {
                            years: 1
                        })
                    })
                }}
                >
                    add year
                </button>

                <button onClick={() => {
                    this.setState({
                        currentDate: dateFns.add(currentDate, {
                            months: 1
                        })
                    })
                }}>add month</button>

                <button onClick={() => {
                    this.setState({
                        currentDate: dateFns.add(currentDate, {
                            weeks: 1
                        })
                    })
                }}>add week</button>

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