function findAvailableSlots(schedules, duration) {
    const mergedIntervals = [];
    
    schedules.forEach(schedule => {
        schedule.forEach(interval => {
            mergedIntervals.push({
                start: new Date(interval.start),
                end: new Date(interval.end)
            });
        });
    });
}