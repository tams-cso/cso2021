export const getCalendarData = async () => {
    let params = {
        method: "GET"
    }

    const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/vq51qaeltmgv6q7b1a0drpihig%40group.calendar.google.com/events?key=AIzaSyBMc9qOA3uH773mpTzpTCYfXlGhDLzYiRI", params)
    const json = await response.json()

    let dates = json.items

    dates = sortDates(dates)

    return dates.slice(0, 5)
}

const sortDates = (dates) => {
    // Sort events by date
    dates.sort((a, b) => { 
        const date1 = a.end.dateTime ? a.end.dateTime : a.end.date
        const date2 = b.end.dateTime ? b.end.dateTime : b.end.date
        return new Date(date1) - new Date(date2) 
     })

     // Filter out past events
     const currentDate = new Date()
     dates = dates.filter(event => {
         const date = event.end.dateTime ? event.end.dateTime : event.end.date
        return new Date(date) >= currentDate && !event.summary.includes('hackTAMS') // Omit hackTAMS because we hard-coded it
     })

     return dates
}