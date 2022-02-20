$(function () {
    model = data;
    load({ myvm: { model } })
})
  
var lastFirstName = function (first_name, last_name){
    return `${last_name}, ${first_name}`
}