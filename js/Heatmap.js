let coordinates = [],
  mousePos;

module.exports = function init() {
  localStorage.setItem('coordinates', JSON.stringify([]));
  localStorage.setItem('heatMap', JSON.stringify([]));

  document.onmousemove = handler;
  setInterval(getMousePosition, 100); // setInterval repeats every X ms
}

function getGroupedData() {
  var positions = JSON.parse(localStorage.getItem('coordinates'));
  var grouped = [];
  positions.map(function(pos, index) {
    var filtered = positions.filter(function(obj) {
      return (obj.x == pos.x && obj.y == pos.y)
    })
    
    var group = Object.assign({}, pos, {value: filtered.length});

    if (grouped.indexOf({x:group.x,y:group.y})==-1) {
      grouped.push(group);
    }
  });
  localStorage.setItem('heatMap', JSON.stringify(grouped));
}

function getMousePosition() {
  var pos = mousePos;
  if (pos){
    coordinates.push({x: pos.x, y: pos.y});
  }
  localStorage.setItem('coordinates', JSON.stringify(coordinates));
  getGroupedData();
}

function handler(event) {
  var dot,
    eventDoc,
    doc,
    body,
    pageX,
    pageY;

  event = event || window.event; // IE-ism

  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
    event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
  }

  mousePos = {
    x: event.pageX,
    y: event.pageY
  };
}
