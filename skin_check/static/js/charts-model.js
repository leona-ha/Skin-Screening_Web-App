function drawCharts() {
  // Confusion Matrix
    trace1 = {
      type: 'heatmap', 
      x: ['walking', 'driving', 'running', 'None'], 
      y: ['walking', 'driving', 'running', 'None'], 
      z: [[58, 0, 0, 1], [3, 23, 0, 7], [1, 0, 2, 0], [14, 6, 0, 21]]
    }
    data = [trace1]
    layout = {
      title: {
        text:'Confusion Matrix',
        font: {
          color: '#007BFF'
        }
      },
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