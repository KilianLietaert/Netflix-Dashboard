const initieer = function(){
    const ctx = document.querySelector('#js-activeUsers');
    Chart.defaults.global.defaultFontFamily = '"Montserrat", sans-serif';
    let myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Subscribed Users', 'Free trial users'],
        datasets: [{
            backgroundColor: ['#e21221', '#FFFFFF'],
            data: [44500000, 20000000],
            borderWidth:0
        },]
    }, 
    options: {
        segmentShowStroke: false,
        responsive: true,
        cutoutPercentage: 80,
        //rotation: 30,
        responsive: false,
        legend: {
            labels: {
                display:true,
                fontColor: 'white',
                usePointStyle: true
            },
            position: 'bottom'
        },    
        tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
					var allData = data.datasets[tooltipItem.datasetIndex].data;
					var tooltipLabel = data.labels[tooltipItem.index];
					var tooltipData = allData[tooltipItem.index];
					var total = 0;
					for (var i in allData) {
						total += allData[i];
					}
					var tooltipPercentage = Math.round((tooltipData / total) * 100);
					return tooltipLabel + ': ' + tooltipData /1000000 + 'M (' + tooltipPercentage + '%)';
				}
			}
        },plugins: {
            labels: {
              fontColor: 'white',
              fontFamily: "'Montserrat', sans-serif",
              position: 'outside',
      
              // add padding when position is `outside`
              // default is 2
              outsidePadding: 4,
      
              // add margin of text when position is `outside` or `border`
              // default is 2
              textMargin: 4
            }}
    }
    });
}  

  document.addEventListener("DOMContentLoaded", initieer);