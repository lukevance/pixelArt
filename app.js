window.onload = function (){

  //
  var build = function(row, col){
    //later add funcitonality for dynamic changing of number
    var rowNumber = row;
    var colNUmber = col;
    //based on number add divs to canvas
    var canvas = document.getElementById('canvas');

    //create box node and attach to canvas
    function addBox (row){
      var box = document.createElement('div');
      //create attribute (.box class) node
      var a = document.createAttribute('class');
      a.value = "box canvasBox";
      // attach attribute to box, and box to canvas
      box.setAttributeNode(a);
      row.appendChild(box);

    }
    // build row nodes then pass in boxes
    function addRow (){
      var row = document.createElement('div');
      //create attribute (.row class) node
      var a = document.createAttribute('class');
      a.value = "row";
      // attach attribute to box, and box to canvas
      row.setAttributeNode(a);
      canvas.appendChild(row);
      var i = 0;
      while (i < colNUmber) {
        addBox(row);
        i++;
      }
    }

    //add correct number of boxes
    var i = 0;
    while(i < rowNumber) {
      addRow();
      i++;
    }
  };

  build(10,10);

  //set default paintBrush color
  var paintBrush = 'red';

	var paint = function(elem){
    // var boxes = document.querySelectorAll('.canvasBox');
    // Object.keys(boxes).forEach(function(elem, idx){
    //   var pixel = boxes[idx];
    //   pixel.addEventListener('click', function(){
    //     event.target.style.backgroundColor = 'red';
    //   })
    // });
    elem.style.backgroundColor = paintBrush;
  };

  // pallette handler function
  var palletteBuilder = function(){
    // get new color from picker
    var newColor = document.getElementsByClassName('jscolor')[0].value;
    var box = document.createElement('div');
    var customRow = document.getElementsByClassName('custom');
    //create attribute (.box class) node
    var a = document.createAttribute('class');
    a.value = "pallBox";
    var backColor = document.createAttribute('style')
    backColor.value = "background-color: " + newColor;
    // attach attribute to box, and box to canvas
    box.setAttributeNode(a);
    box.setAttributeNode(backColor);
    customRow.appendChild(box);




      // make new standard color available to paint(); function
  };

  var pallettePicker = function (elem) {
    elem.style.border = "solid thick black";
    paintBrush = elem.style.backgroundColor;
  };


addEventListener('click', function(event){
  var clickedEl = event.target;
  var arrayOfElems = clickedEl.className.split(' ');
  for (var i = 0; i < arrayOfElems.length; i++){
    if (arrayOfElems[i] === 'canvasBox'){
      paint(clickedEl);
    } else if (arrayOfElems[i] === 'add') {
      document.querySelectorAll('.pickAColor')[0].style.visibility = 'visible';
    } else if (arrayOfElems[i] === 'pallBox') {
      var palBoxes = document.getElementsByClassName('pallBox')
      Object.keys(palBoxes).forEach(function(elem, idx){
        palBoxes[idx].style.border = "solid thin black";
      });
      pallettePicker(clickedEl);
    } else if (arrayOfElems[i] === 'small'){
      document.querySelectorAll('.welcome')[0].style.visibility = 'hidden';
      build(20, 10);
    } else if (arrayOfElems[i] === 'medium'){
      build(10,10);
    } else if (arrayOfElems[i] === 'large'){
      build(10,10);
    } else if (arrayOfElems[i] === 'jscolor') {
      
    }
  }
});

addEventListener("mousedown", function(event) {

  addEventListener('mouseup', function(eventOff){
    console.log('hello');
    return;
  });

  var clickedEl = event.target;
  var arrayOfElems = clickedEl.className.split(' ');
  for (var i = 0; i < arrayOfElems.length; i++) {
    if (arrayOfElems[i] === 'canvasBox'){
      paint(clickedEl);
      addEventListener("mousemove", function(event2) {
        var hoverEl = event2.target;
        var arrayOfHoverElems = hoverEl.className.split(' ');
        for (var i = 0; i < arrayOfHoverElems.length; i++) {
          if (arrayOfHoverElems[i] === 'canvasBox'){
            paint(hoverEl);
          }
        };
      });
    }
  };
});

// add loop to set color from jscolor to pallette

// use new area for circular Ui...

// add drag through

// add if/else to adjust size of canvasBoxes based on size of user choice

// maybe just have large, medium, small?

};
