import React, {Component} from 'react'
import styles from './Calendar.module.scss'
import * as dateFns from 'date-fns'
import Month from './../Month'

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
        const fullMonth = dateFns.eachDayOfInterval({
            start: startMonth,
            end: endMonth
        })
        const fullMonthDates = fullMonth.map((day) => {
            return dateFns.format(day, 'd')
        })
        return (
            <article>
                <div>
                    <Month month={fullMonthDates}/>
                    {currentDate.toLocaleDateString()}
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