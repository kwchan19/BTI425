
$(function () {
  model = data;
  load({ create, click })
})


var create = temp => [
    $('<td>').text(temp.id).hide(),
    $('<td>').text(`${temp.last_name}, ${temp.first_name}`),
    $('<td>').text(moment(temp.birthdate).format('YYYY-MM-DD')),
    $('<td>').html(
      `City: ${temp.city}<br>
      Email: ${temp.email}<br>
      <a href="${temp.website}">Website</a>`
    ),
    $('<td>').text(temp.credits)
]
  
function click() {
  var id = $(this).find('td').first().text()
  var temp = model[id - 1]
  var birthdate = moment(temp.birthdate)

  $('#data-details .card-title').text(`${temp.first_name} ${temp.last_name}`)
  $('#data-details #birth-date').text(birthdate.format('dddd, MMMM D, YYYY'))
  $('#data-details #age').text(`Age: ${moment().diff(birthdate, 'years')}`)
  $('#data-details #city').text(temp.city)
}
