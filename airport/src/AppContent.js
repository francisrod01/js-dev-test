import React, { Component } from 'react'

import Scheduler from './lib/scheduler'


// const configedTimer = 600000 // 10 minutes
// const configedTimer = 1200000 // 20 minutes
const configedTimer = 5000 // 5 seconds

class AppContent extends Component {
    constructor(props) {
        super(props)

        this.planeQueue = new Scheduler(configedTimer)

        this.state = {
            isRoomAvailable: true,
        }
    }
    componentDidMount() {
        const reservedTime = new Date().getTime()

        if (this.planeQueue.couldScheduleAt(reservedTime)) {
            console.log('Component did mount has a schedule at ', reservedTime)
            
            this.planeQueue.scheduleAt(reservedTime, 'AirFrance')
            
            this.setState({ isRoomAvailable: false })

            // Call the unschedule by the timer.
            setTimeout(() => {
                return this.planeQueue.unScheduleAt(reservedTime)
            }, configedTimer)
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('Component will receive props: ', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should component update: ', nextProps, nextState)

        //

        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update props: ', nextProps, nextState)
    }
    render() {
        return (
            <div className='pdg-t10'>
                App content here.
            </div>
        )
    }
}

export default AppContent
