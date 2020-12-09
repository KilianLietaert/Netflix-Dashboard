const init = function(){
  var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Basic', 'Standard', 'Premium'],
            datasets: [{
                label: 'Subscribed users',
                backgroundColor: '#e21221',
                data: [17000000, 44500000, 35000000],
                barThickness: 0.5
            },{
                label: 'Trial users',
                backgroundColor: 'white',
                data: [2000000, 18000000, 11500000],
                
            },]
        },

        // Configuration options go here
        options: {
            legend: {
            labels: {
                // This more specific font property overrides the global property
                fontColor: 'white'
            }
        }
        }
});

Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        min: 12000000
    }
});
}

document.addEventListener("DOMContentLoaded", init);