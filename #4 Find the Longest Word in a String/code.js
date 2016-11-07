
function findLongestWord(str) {
  var a = str.split(' ');
  var x = [];
  
  for(var i=0; i<a.length; i++){
  x.push(a[i].length);
  }
 
  x.sort(function(a, b) {
    return b - a;
  });
  
  return x[0];
}

findLongestWord("Google do a barrel roll");
