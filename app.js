function createMatrix(width,height){
    var matrix = [];
    for(var i = 0; i < height; i++){
     matrix[i] = new Array(width);
    }
    return matrix;
}
matrix = fillMatrix(createMatrix(10,10));
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

class Node{
  constructor(x,y,status, pointer){
    this.x = x;
    this.y = y;
    this.status = status;
    this.pointer = pointer;
  }
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  get status(){
    return this.status;
  }
  get x(){
    return this.x;
  }
  get y(){
    return this.y;
  }
  get pointer(){
    return this.pointer;
  }
  
}
function fillMatrix(...matrix){
  for(var i = 0; i < matrix.length; i++){
    for(var v = 0; v < matrix[i].length; v++){
      matrix[i][j] = new Node(i,j);
    }
  }
  return matrix;
}
function djikstrasAlgorithm(...matrix){
  return matrix;
}



