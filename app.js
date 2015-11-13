window.onload = function (){

  //
  var build = function(){
    //later add funcitonality for dynamic changing of number
    var rowNumber = 10;
    var colNUmber = 10;
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

	function paint(){
    var boxes = document.querySelectorAll('.canvasBox');
    Object.keys(boxes).forEach(function(elem, idx){
      var pixel = boxes[idx]; pixel.addEventListener('click', function(){
        event.target.style.backgroundColor = 'red';
      })
    });
  };
  paint();

  // pallette handler function
  // get pallette source
    // set standard color to pallette source color


    // make new standard color available to paint(); function
};
