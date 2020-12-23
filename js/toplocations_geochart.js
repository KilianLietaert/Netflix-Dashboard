document.addEventListener("DOMContentLoaded", () => {
    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyB1euMM6E5YOu-sj5odia85rCtmkkjFqr4'
      });

      google.charts.setOnLoadCallback(drawRegionsMap);
    
      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Customers'],
          ['United States', 61043000],
          ['United Kingdom', 13010000],
          ['Mexico', 6783000],
          ['Brazil', 15000000],
          ['France', 6700000],
          ['Canada', 6619000],
          ['Germany', 6400000],
          ['Australia', 7000000],
          ['Costa Rica', 242000],
          ['Chile', 769000],
          ['Argentina', 4500000],
          ['Spain', 3000000],
          ['Netherlands', 2800000],
          ['Italy', 2000000],
          ['Poland', 775000],
          ['Turkey', 1500000],
          ['Norway', 1000000],
          ['Sweden', 2100000],
          ['United Arab Emirates', 322000],
          ['India', 2000000],
          ['Australia', 4900000],
          ['New Zealand', 2420000],
          ['Japan', 3000000],
          ['Korea (Republic of)', 2720000]
        ]);
    
        var options = {
            backgroundColor: 'none',
            datalessRegionColor: '#828282',
            colorAxis: {colors: ['#FFCCCC', '#E21221']},
            legend: 'none'
        };
    
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    
        chart.draw(data, options);
      }

      console.log(12345);
  });