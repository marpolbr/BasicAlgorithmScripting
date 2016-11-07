
function confirmEnding(str, target) {
  str = str.substring(str.length - target.length);
  if(str===target){
    return true;
  }
  else{
    return false;
  }
  
}

confirmEnding("He has to give me a new name", "name");
