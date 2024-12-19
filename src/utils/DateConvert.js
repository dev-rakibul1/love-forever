export function formatDate(dateString) {
  const date = new Date(dateString)

  // Format options for date and time
  const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' }
  const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true }

  // Format the date
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(date)

  // Format the time
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(date)

  return `${formattedDate} | ${formattedTime}`
}
