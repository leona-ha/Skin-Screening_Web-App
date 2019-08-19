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
      text:'Plot Title',
      // xref: 'paper',
      // x: 0.05,
    },
    xaxis: {
      title: {
        text: 'x Axis',
      },
    },
    yaxis: {
      title: {
        text: 'y Axis',
        //font: {
         // family: 'Courier New, monospace',
         // size: 18,
         // color: '#7f7f7f'
        //}
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
  var layout = {barmode: 'group'}

  Plotly.newPlot('barchart', data, layout, { displayModeBar: false})


// Confusion Matrix
  trace1 = {
    type: 'heatmap', 
    x: ['walking', 'driving', 'running', 'None'], 
    y: ['walking', 'driving', 'running', 'None'], 
    z: [[58, 0, 0, 1], [3, 23, 0, 7], [1, 0, 2, 0], [14, 6, 0, 21]]
  }
  data = [trace1]
  layout = {
    title: 'Confusion Matrix v1.1.2', 
    xaxis: {title: 'Predicted value'}, 
    yaxis: {title: 'Real value'}, 
    annotations: [
      {
        x: 'walking', 
        y: 'walking', 
        font: {color: 'white'}, 
        text: '58', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'driving', 
        y: 'walking', 
        font: {color: 'white'}, 
        text: '0', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'running', 
        y: 'walking', 
        font: {color: 'white'}, 
        text: '0', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'None', 
        y: 'walking', 
        font: {color: 'white'}, 
        text: '1', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'walking', 
        y: 'driving', 
        font: {color: 'white'}, 
        text: '3', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'driving', 
        y: 'driving', 
        font: {color: 'white'}, 
        text: '23', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'running', 
        y: 'driving', 
        font: {color: 'white'}, 
        text: '0', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'None', 
        y: 'driving', 
        font: {color: 'white'}, 
        text: '7', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'walking', 
        y: 'running', 
        font: {color: 'white'}, 
        text: '1', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'driving', 
        y: 'running', 
        font: {color: 'white'}, 
        text: '0', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'running', 
        y: 'running', 
        font: {color: 'white'}, 
        text: '2', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'None', 
        y: 'running', 
        font: {color: 'white'}, 
        text: '0', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'walking', 
        y: 'None', 
        font: {color: 'white'}, 
        text: '14', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'driving', 
        y: 'None', 
        font: {color: 'white'}, 
        text: '6', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'running', 
        y: 'None', 
        font: {color: 'white'}, 
        text: '0', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }, 
      {
        x: 'None', 
        y: 'None', 
        font: {color: 'white'}, 
        text: '21', 
        xref: 'x1', 
        yref: 'y1', 
        showarrow: false
      }
    ]
  }

  Plotly.newPlot('matrixchart', data, layout, { displayModeBar: false})

}