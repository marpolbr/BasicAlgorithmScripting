
function confirmEnding(str, target) {

  str = str.substring(str.length - target.length);
  
  return str===target;
}

confirmEnding("He has to give me a new name", "name");
