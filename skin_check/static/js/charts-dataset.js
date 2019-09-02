function drawCharts() {

  // Pie Chart
  var data = [{
    values: [321, 514, 1099, 115, 1113, 6705, 142],
    labels: ["akiec", "bcc", "bkl","df", "mel", "nv", "vasc"],
    type: 'pie'
  }]
  var layout = {
    title: {
      text:'Amount of images per category',
      font: {
        color: '#007BFF'
      }
    },
    height: 400,
    width: 500
  }
  Plotly.newPlot('piechart', data, layout, { displayModeBar: false})


  // Bar Chart
  var trace1 = {
    x: ["akiec", "bcc", "bkl","df", "mel", "nv", "vasc"],
    y: [4, 6, 12, 1,13, 63, 1],
    name: 'male',
    type: 'bar'
  }
  var trace2 = {
    x: ["akiec", "bcc", "bkl","df", "mel", "nv", "vasc"],
    y: [2, 4, 10, 1, 9, 71, 2],
    name: 'female',
    type: 'bar'
  }
  var data = [trace1, trace2];
  var layout = {
    title: {
      text:'Proportion of diagnostic label per gender in %',
      font: {
        color: '#007BFF'
      }
    },
    barmode: 'group'
  }
  Plotly.newPlot('barchart', data, layout, { displayModeBar: false})

  // Bar Chart
  var trace1 = {
    x: ["akiec", "bcc", "bkl","df", "mel", "nv", "vasc"],
    y: [70.0, 70.0, 65.0, 50.0, 60.0, 45.0, 55.0],
    name: 'median age',
    type: 'bar'
  }

  var data = [trace1, trace2];
  var layout = {
    title: {
      text:'Median Age per diagnosis in the HAM10000',
      font: {
        color: '#007BFF'
      }
    },
    barmode: 'group'
  }
  Plotly.newPlot('barchart2', data, layout, { displayModeBar: false})

}
