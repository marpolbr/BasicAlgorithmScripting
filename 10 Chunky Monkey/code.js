
function chunkArrayInGroups(arr, size) {
 
  var arr2 = [];

  for(var i=0;i<arr.length/size;i++){  
    arr2.push(arr.slice(size*i,size*i+size));
  }

  return arr2;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
