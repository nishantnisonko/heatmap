var heatMap = require('./Heatmap');
var $ = require('jquery');
heatMap();

var h337= require('heatmap.js');

$('#heatmap').click(function() {
  var heatmap = h337.create({
    container: document.getElementById('root')
  });

  heatmap.setData({
    data: JSON.parse(localStorage.getItem('heatMap'))
  });
});
