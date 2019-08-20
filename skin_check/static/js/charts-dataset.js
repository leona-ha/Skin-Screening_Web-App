function drawCharts() {

  // Pie Chart
  var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }] 
  var layout = {
    title: {
      text:'Pie Chart',
      font: {
        color: '#007BFF'
      }
    },
    height: 400,
    width: 500
  }
  Plotly.newPlot('piechart', data, layout, { displayModeBar: false})


// Line Chart
  var trace1 = {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    y: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    name: 'Name of Trace 1',
    type: 'scatter'
  }
  var trace2 = {
    x: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    y: [1, 0, 3, 2, 5, 4, 7, 6, 8],
    name: 'Name of Trace 2',
    type: 'scatter'
  }
  var data = [trace1, trace2];
  var layout = {
    title: {
      text:'Line Chart',
      font: {
        color: '#007BFF'
      }
    },
    xaxis: {
      title: {
        text: 'x Axis',
      },
    },
    yaxis: {
      title: {
        text: 'y Axis',
      }
    }
  }
  Plotly.newPlot('linechart', data, layout, { displayModeBar: false});

  // Bar Chart
  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  }
  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  }
  var data = [trace1, trace2];
  var layout = {
    title: {
      text:'Bar Chart',
      font: {
        color: '#007BFF'
      }
    },
    barmode: 'group'
  }
  Plotly.newPlot('barchart', data, layout, { displayModeBar: false})

}