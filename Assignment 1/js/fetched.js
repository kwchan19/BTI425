$(function () {
    ajaxReq(
      {
        url: 'https://lit-coast-73093.herokuapp.com/employees',
        type: 'GET'
      },
      res => {
        model = res
        load({ create, click })
      },
      err => console.log(err)
    )
})
  
var create = temp => [
  $('<td>').text(temp._id).hide(),
  $('<td>').text(`${temp.LastName}, ${temp.FirstName}`),
  $('<td>').text(moment(temp.HireDate).format('YYYY-MM-DD')),
  $('<td>').html(
    `${temp.AddressStreet}<br>
    ${temp.AddressCity}, ${temp.AddressState}, ${temp.AddressZip}`
  ),
  $('<td>').text(`$${temp.SalaryBonus}`)
]

function click() {
  var id = $(this).find('td').first().text()
  var temps = model.find(e => e._id == id)
  var HireDate = moment(temps.HireDate)

  $('#data-details .card-title').text(`${temps.FirstName} ${temps.LastName}`)
  $('#data-details #hired').text(HireDate.format('dddd, MMMM D, YYYY'))
  $('#data-details #worked').text(`Years of service: ${moment().diff(HireDate, 'years')}`)
  $('#data-details #city').text(temps.AddressCity)
}