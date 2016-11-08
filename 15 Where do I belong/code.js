
function getIndexToIns(arr, num) {
  var arr2 = arr.sort(function(a, b) {
    return a - b;
  });
 
  for(var i=0; i<arr2.length; i++){
    if(num<=arr2[i]){
      return arr2.indexOf(arr2[i]);
    }
  }
  return arr2.length;
}

getIndexToIns([10, 20, 30, 40, 50], 30);
