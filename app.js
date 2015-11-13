window.onload = function (){

  //
  var build = function(){
    //later add funcitonality for dynamic changing of number
    var rowNumber = 15;
    var colNUmber = 15;
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
      console.log('row')
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
  }();

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
    // number of colors in pallete
    // var pallNumber = 5;
    //
    // var pallRow = document.getElementById('pallete');






      // make new standard color available to paint(); function
  }();

  var pallettePicker = function (elem) {
    // var palBoxes = document.querySelectorAll('.pallBox');
    // Object.keys(palBoxes).forEach(function(elem, idx) {
    //   // get pallette destination
    //   var pixelPall = palBoxes[idx];
    //   console.log(pixelPall);
    //   // on click set standard color to pallette source color
    //   pixelPall.addEventListener('click', function(){
    elem.style.border = "solid thick black";
    paintBrush = elem.style.backgroundColor;
    //   });

    // });
  };


addEventListener('click', function(event){
  var clickedEl = event.target;
  var arrayOfElems = clickedEl.className.split(' ');
  for (var i = 0; i < arrayOfElems.length; i++){
    if (arrayOfElems[i] === 'canvasBox'){
      paint(clickedEl);
    } else if (arrayOfElems[i] === 'pallBox') {
      var palBoxes = document.getElementsByClassName('pallBox')
      Object.keys(palBoxes).forEach(function(elem, idx){
        palBoxes[idx].style.border = "solid thin black";
      });
      pallettePicker(clickedEl);
    }
  }
})

};
