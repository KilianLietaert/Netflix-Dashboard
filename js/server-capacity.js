
const starten = function(){
    let percentage = 45;

    const opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
          length: 0.3, // // Relative to gauge radius
          strokeWidth: 0.1, // The thickness
          color: '#e21221' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#e21221',    // just experiment with them
        strokeColor: '#292929',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        
      };
      const target = document.getElementById('foo'); // your canvas element
      const gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
      gauge.maxValue = 100; // set max gauge value
      gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
      gauge.animationSpeed = 32; // set animation speed (32 is default value)
      gauge.set(percentage); // set actual value

      document.querySelector(`.js-server-label`).textContent = percentage + `%`;
};

  document.addEventListener("DOMContentLoaded", starten);