const assert = require('chai').assert

import Scheduler from '../lib/scheduler'


describe('Planes scheduling', () => {

    it('Successfully scheduled.', (done) => {
        const timer = 300000 // 5 minutes
        const reservedTime = new Date().getTime()

        const planeQueue = new Scheduler(timer)
        const isScheduled = planeQueue.scheduleAt(reservedTime, 'AirFrance')

        assert.isBoolean(isScheduled)
        assert.isTrue(isScheduled)

        done()
    })

    it('Check if block to schedule in the same time.', (done) => {
        const timer = 300000 // 5 minutes
        const reservedTime = new Date().getTime()

        const planeQueue = new Scheduler(timer)
        const isScheduled01 = planeQueue.scheduleAt(reservedTime, 'AirFrance')
        const isScheduled02 = planeQueue.scheduleAt(reservedTime, 'American Airlines')
        const isScheduled03 = planeQueue.scheduleAt(reservedTime, 'Latam')

        assert.isBoolean(isScheduled01)
        assert.isTrue(isScheduled01)
        
        assert.isBoolean(isScheduled02)
        assert.isNotTrue(isScheduled02)

        assert.isBoolean(isScheduled03)
        assert.isNotTrue(isScheduled03)

        done()
    })

    it('Check if possible to unshedule the time scheduled.', (done) => {
        const timer = 300000 // 5 minutes
        const reservedTime = new Date().getTime()

        const planeQueue = new Scheduler(timer)
        const isScheduled01 = planeQueue.scheduleAt(reservedTime, 'AirFrance')
        const isUnscheduled01 = planeQueue.unScheduleAt(reservedTime)

        assert.isBoolean(isScheduled01)
        assert.isTrue(isScheduled01)

        assert.isBoolean(isUnscheduled01)
        assert.isTrue(isUnscheduled01)

        done()
    })

    it('Check if possible to schedule after to unshecule the first.', (done) => {
        const timer = 300000 // 5 minutes
        const reservedTime = new Date().getTime()

        const planeQueue = new Scheduler(timer)
        const isScheduled01 = planeQueue.scheduleAt(reservedTime, 'AirFrance')
        const isUnscheduled01 = planeQueue.unScheduleAt(reservedTime)

        const isScheduled02 = planeQueue.scheduleAt(reservedTime, 'American Airlines')
        const isScheduled03 = planeQueue.scheduleAt(reservedTime, 'Latam')

        assert.isBoolean(isScheduled01)
        assert.isTrue(isScheduled01)

        assert.isBoolean(isUnscheduled01)
        assert.isTrue(isUnscheduled01)
        
        assert.isBoolean(isScheduled02)
        assert.isTrue(isScheduled02)

        assert.isBoolean(isScheduled03)
        assert.isNotTrue(isScheduled03)

        done()
    })
})
