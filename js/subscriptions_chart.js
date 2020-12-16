const init = function(){
  const ctx = document.getElementById('myChart');
  Chart.defaults.global.defaultFontFamily = '"Montserrat", sans-serif';
        let chart = new Chart(ctx, {
        type: 'bar',

        data: {
            labels: ['Basic', 'Standard', 'Premium'],
            datasets: [{
                label: 'Subscribed users',
                backgroundColor: '#e21221',
                data: [17000000, 44500000, 35000000]
            },{
                label: 'Trial users',
                backgroundColor: 'white',
                data: [2000000, 18000000, 11500000]               
            },]
        },

        options: {
            responsive: true,
            legend: {
            labels: {
                fontColor: 'white',
                usePointStyle: true
            }},
            scales: {
                yAxes: [{
                  ticks: {
                    callback: function(label, index, labels) {
                        return label/1000000 + 'M';
                    },
                    beginAtZero: true,
                    max: 60000000,
                    fontColor: 'white'
                  },
                  gridLines: {
                    display: true,
                    zeroLineColor: '#2E2E2E',
                    zeroLineWidth:2,
                    color: '#2E2E2E',
                    lineWidth: 1
                  }
                }],
                xAxes: [{
                    barThickness: 20,
                  ticks: {
                    beginAtZero: true,
                    fontColor: 'white',
                  },
                  gridLines: {
                    display: false,
                  }
                }]
              },
              plugins: {
                labels: {
                  fontColor: 'rgba(0,0,0,0)',
                  fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                  position: 'outside',
          
                  // add padding when position is `outside`
                  // default is 2
                  outsidePadding: 4,
          
                  // add margin of text when position is `outside` or `border`
                  // default is 2
                  textMargin: 4
                }
            }
        }
});

}

document.addEventListener("DOMContentLoaded", init);