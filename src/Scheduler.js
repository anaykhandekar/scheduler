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

    mergedIntervals.sort((a, b) => a.start - b.start)

    const availableSlots = [];
    let lastEnd = mergedIntervals[0].end;

    for (let i = 1; i < mergedIntervals.length; i++) {
        const currentInterval = mergedIntervals[i];
        const availableStart = lastEnd;
        const availableEnd = currentInterval.start;

        if ((availableEnd - availableStart) >= duration) {
            availableSlots.push({
                start: availableStart,
                end: availableEnd
            });
        }

        if (currentInterval.end > lastEnd) {
            lastEnd = currentInterval.end;
        }
    }

    return availableSlots;
}