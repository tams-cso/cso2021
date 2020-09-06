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
        const date1 = a.start.dateTime? a.start.dateTime : a.start.date
        const date2 = b.start.dateTime? b.start.dateTime : b.start.date
        return new Date(date1) - new Date(date2) 
     })

     // Filter out past events
     const currentDate = new Date()
     dates = dates.filter(event => {
        const date = event.start.dateTime? event.start.dateTime : event.start.date
        return new Date(date) >= currentDate - 3600000 && !event.summary.includes('hackTAMS') // Omit hackTAMS because we hard-coded it
     })

     return dates
}