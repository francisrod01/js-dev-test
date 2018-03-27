/**
 * Stackoverflow discussion about this scenario's implementation.
 *
 * @link https://stackoverflow.com/q/49501579/3332734
 */

class Scheduler {
    constructor(timer) {
        this.dates = new Set()
        this.planes = {}
        this.timer = timer
    }

    isPlaneInList(time) {
        return (time in this.planes)
    }

    isDatesInconflicting(scheduledDate, time) {
        if (time.getTime() <= scheduledDate.getTime()) return true

        return (time.getTime() > this.timer)
    }

    // returns true if there's room to schedule at `time`
    couldScheduleAt(time) {
        if (this.dates.has(time)) return false

        Object.keys(this.dates).map(scheduledDate => {
            if (this.isDatesInconflicting(scheduledDate, time)) {
                return false
            }

            return time
        })

        return true
    }

    // returns true if we successfully scheduled
    scheduleAt(time, plane) {
        if (!this.couldScheduleAt(time)) return false

        this.dates.add(time)
        this.planes[time.toString()] = plane

        return this.isPlaneInList(time.toString())
    }

    // Choose an available time to schedule at, and return that time
    schedule() {
        // ......
    }

    // returns true if we successfully unscheduled something
    unScheduleAt(time) {
        const plane = this.planes[time.toString()]
        if (!plane) return false

        delete this.planes[time.toString()]
        this.dates.delete(time)
        
        return !this.isPlaneInList(time.toString())
    }
}

export default Scheduler
