
function mutation(arr) {
  
  var str1 = arr[0].toLowerCase();
  var str2 = arr[1].toLowerCase().split('');
  var count = 0;
  var pos;
  
  for(var i=0;i<str2.length;i++){
    pos = str1.indexOf(str2[i]);
    
    if (pos === -1) {
      count++;
    }
  }
  
  if(count>0){
    return false;
  }
  else{
    return true;
  }
  

}

mutation(["hello", "hey"]);
