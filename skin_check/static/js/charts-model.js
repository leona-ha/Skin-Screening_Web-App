function drawCharts() {
  // Confusion Matrix
    trace1 = {
      type: 'heatmap',
      x: ["akiec", "bcc", "bkl","df", "mel", "nv", "vasc"],
      y: ["akiec", "bcc", "bkl","df", "mel", "nv", "vasc"],
      z: [[1, 0, 4, 7,4,14,0], [0, 3, 1, 3,4,24,0], [0, 1, 5, 9,17,56,0], [0, 0, 1, 4,0 ,3,0],[0, 0, 1, 6,10,29,0],[0, 0, 1, 14,5,863,0],[0, 1, 0, 0,0,8,4]]
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
          x: 'akiec',
          y: 'akiec',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'akiec',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'akiec',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'akiec',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'akiec',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'akiec',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'akiec',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'akiec',
          y: 'bcc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'bcc',
          font: {color: 'white'},
          text: '3',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'bcc',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'bcc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'bcc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'bcc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'bcc',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'akiec',
          y: 'bkl',
          font: {color: 'white'},
          text: '4',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'bkl',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'bkl',
          font: {color: 'white'},
          text: '5',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'bkl',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'bkl',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'bkl',
          font: {color: 'white'},
          text: '1',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'bkl',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'akiec',
          y: 'df',
          font: {color: 'white'},
          text: '7',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'df',
          font: {color: 'white'},
          text: '3',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'df',
          font: {color: 'white'},
          text: '9',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'df',
          font: {color: 'white'},
          text: '4',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'df',
          font: {color: 'white'},
          text: '6',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'df',
          font: {color: 'white'},
          text: '14',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'df',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'akiec',
          y: 'mel',
          font: {color: 'white'},
          text: '4',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'mel',
          font: {color: 'white'},
          text: '4',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'mel',
          font: {color: 'white'},
          text: '17',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'mel',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'mel',
          font: {color: 'white'},
          text: '10',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'mel',
          font: {color: 'white'},
          text: '5',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'mel',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'akiec',
          y: 'nv',
          font: {color: 'white'},
          text: '14',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'nv',
          font: {color: 'white'},
          text: '24',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'nv',
          font: {color: 'white'},
          text: '56',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'nv',
          font: {color: 'white'},
          text: '3',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'nv',
          font: {color: 'white'},
          text: '29',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'nv',
          font: {color: 'white'},
          text: '863',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'nv',
          font: {color: 'white'},
          text: '8',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'akiec',
          y: 'vasc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bcc',
          y: 'vasc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'bkl',
          y: 'vasc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'df',
          y: 'vasc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'mel',
          y: 'vasc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'nv',
          y: 'vasc',
          font: {color: 'white'},
          text: '0',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
        {
          x: 'vasc',
          y: 'vasc',
          font: {color: 'white'},
          text: '4',
          xref: 'x1',
          yref: 'y1',
          showarrow: false
        },
      ]
    }
    Plotly.newPlot('matrixchart', data, layout, { displayModeBar: false})

  }
