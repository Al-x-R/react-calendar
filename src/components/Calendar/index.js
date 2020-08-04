import React, {Component} from 'react';
import styles from './Calendar.module.scss'

class Calendar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentDate: new Date()
        }
    }

    render() {
        const {currentDate} = this.state
        return (
            <div>
                {currentDate.toLocaleDateString()}
            </div>
        );
    }
}

export default Calendar;