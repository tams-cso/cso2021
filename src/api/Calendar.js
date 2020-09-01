export const getCalendarData = async () => {
    let params = {
        method: "GET"
    }

    const response = await fetch("https://www.googleapis.com/calendar/v3/calendars/vq51qaeltmgv6q7b1a0drpihig%40group.calendar.google.com/events?key=AIzaSyBMc9qOA3uH773mpTzpTCYfXlGhDLzYiRI", params)
    const json = await response.json()

    let dates = json.items

    dates = sortDates(dates)

    return dates
}

const sortDates = (dates) => {
    console.log(dates)
    console.log(dates[0].start.date)

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
        return new Date(date) >= currentDate
     })

     return dates
}