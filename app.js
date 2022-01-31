function createMatrix(width,height){
    var matrix = [];
    for(var i = 0; i < height; i++){
     matrix[i] = new Array(width);
    }
    return matrix;
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

class Node{
  constructor(x,y,)
}
function findPath(matrix){

}



