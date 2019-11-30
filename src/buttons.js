function html(){
  var button = document.getElementById("htmlButton");
  var x = document.getElementsByClassName("box-html");
  var i = 0, l = x.length;
  for( ; i < l; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    }else {
      x[i].style.display = "none";
    }
  }
  if (button.style.backgroundColor == "rgb(34, 221, 34)"){
    button.style.backgroundColor = "rgb(170, 170, 170)";
  } else {
    button.style.backgroundColor = "rgb(34, 221, 34)";
  }
}
function css(){
  var button = document.getElementById("cssButton")
  var x = document.getElementsByClassName("box-css");
  var i = 0, l = x.length;
  for( ; i < l; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    }else {
      x[i].style.display = "none";
    }
  }
  if (button.style.backgroundColor == "rgb(34, 221, 34)"){
    button.style.backgroundColor = "rgb(170, 170, 170)";
  } else {
    button.style.backgroundColor = "rgb(34, 221, 34)";
  }
}
function java(){
  var button = document.getElementById("javaButton")
  var x = document.getElementsByClassName("box-javascript");
  var i = 0, l = x.length;
  for( ; i < l; i++) {
    if (x[i].style.display === "none") {
      x[i].style.display = "block";
    }else {
      x[i].style.display = "none";
    }
  }
  if (button.style.backgroundColor == "rgb(34, 221, 34)"){
    button.style.backgroundColor = "rgb(170, 170, 170)";
  } else {
    button.style.backgroundColor = "rgb(34, 221, 34)";
  }
}
