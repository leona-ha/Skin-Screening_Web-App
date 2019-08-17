// We  need to get references to the datalist and id  elements in the JavaScript code.

var dataList = document.getElementById('json-datalist')

data.forEach(movie => {
    var option = document.createElement('option')
    option.value = movie['Title']
    dataList.appendChild(option) // adds a child option for every title 
})
