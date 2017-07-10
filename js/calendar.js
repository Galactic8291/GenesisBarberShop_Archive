(function() {
  const now = new Date(),
    weekdays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
    months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  let month = now.getMonth() + 1,
    year = now.getFullYear(),
    logical_month = month - 1,
    first_day = new Date(year, logical_month, 1),
    first_day_weekday = first_day.getDay() + 1,
    month_length = new Date(year, month, 0).getDate(),
    prev_month_length = new Date(year, logical_month, 0).getDate()

  $('.calendar').append(`<h2>${months[logical_month]} ${year}</h2>`)

  let calendar_table = $('<table class="calendar-table" />')
  let table_head = $('<thead />')

  let weekdays_row = $('<tr class="week-days" />')
  let weekdays_items = weekdays.map(label => $(`<th class='day'>${label}</th>`))
  weekdays_row.append(weekdays_items)
  table_head.append(weekdays_row)

  let table_body = $('<tbody />')
  let day = 1, prev = 1, next = 1, weeks = []

  for(let row = 1; row <= 7; row++) {
    let table_row = $('<tr class="week" />')
    for (let col= 1; col <= 7; col++) {
      let item;
      if (day <= month_length && (row > 1 || col >= first_day_weekday)) {
        item = $(`<td class='day'>${day}</td>`)
        if(day === now.getDate()) {
          item.addClass('selected appt')
        } else if(day < now.getDate()) {
          item.addClass('past')
        } else if(day > now.getDate()) {
          item.addClass('appt')
        }
        day++
      } else if (day <= month_length) {
        let previous = prev_month_length - first_day_weekday + prev + 1;
        item = $(`<td class='day other-month'>${previous}</td>`)
        prev++
      } else {
        item = $(`<td class='day other-month'>${next}</td>`)
        next++;
      }

      table_row.append(item)
    }

    weeks.push(table_row)
    if (day > month_length) {
      break;
    }
  }

  table_body.append(weeks)

  calendar_table.append(table_head)
  calendar_table.append(table_body)
  $('.calendar').append(calendar_table)
})()
