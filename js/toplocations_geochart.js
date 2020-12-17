document.addEventListener("DOMContentLoaded", () => {
    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyB1euMM6E5YOu-sj5odia85rCtmkkjFqr4'
      });

      google.charts.setOnLoadCallback(drawRegionsMap);
    
      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Customers'],
          ['United States', 65000000],
          ['United Kingdom', 14000000],
          ['Mexico', 17000000],
          ['Brazil', 7000000],
          ['France', 65000000],
          ['Canada', 14000000],
          ['Germany', 17000000],
		  ['Australia', 7000000],
        ]);
    
        var options = {
            backgroundColor: 'none',
            datalessRegionColor: '#828282',
            colorAxis: {colors: ['#828282', '#E21221']},
            legend: 'none'
        };
    
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    
        chart.draw(data, options);
      }

      console.log(12345);
  });