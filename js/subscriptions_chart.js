var options = {
  seriesBarDistance: 15
};

new Chartist.Bar('.ct-chart', {
  labels: ['Basic', 'Standard', 'Premium'],
  series: [
    [{value: 2000000, className: 'foo'}, {value: 18000000, className: 'bar'}, {value: 11000000, className: 'bar'}],
      [{value: 17000000, className: 'foo'}, {value: 44500000, className: 'bar'}, {value: 35000000, className: 'bar'}]
  ]
}, {
  seriesBarDistance: 10,
  axisX: {
    offset: 60
  },
  axisY: {
    offset: 80,
    labelInterpolationFnc: function(value) {
      return (value /100000)
    },
    scaleMinSpace: 15
  }
}, options);
