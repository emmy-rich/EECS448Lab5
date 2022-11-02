let picNum = 1;

function previous(){
  let element = document.getElementById('pic');

  if(picNum == 1){
    picNum = 5;
  }
  else{
    picNum --;
  }

  newSrc = "pictures/pic" + picNum + ".jpg";
  element.src = newSrc;
}

function next(){
  let element = document.getElementById('pic');

  if(picNum == 5){
    picNum = 1;
  }
  else{
    picNum ++;
  }

  newSrc = "pictures/pic" + picNum + ".jpg";
  element.src = newSrc;
}
