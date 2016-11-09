
function rot13(str) { // LBH QVQ VG!

  var str2 = str.split('');
  var result = [];
  var x; // Char to a character code
  var x2; // code to char
  for(var i=0; i<str2.length;i++){
    if(str2[i].charCodeAt()>=65 && str2[i].charCodeAt()<=77){
      x = str2[i].charCodeAt()+13;
      x2 = String.fromCharCode(x);
      result.push(x2);
    }
    else if(str2[i].charCodeAt()>=78 && str2[i].charCodeAt()<=90){
      x = str2[i].charCodeAt()-13;
      x2 = String.fromCharCode(x);
      result.push(x2);
    }
    else{
      result.push(str[i]);
    }
  }
  //'Z'.charCodeAt()-13
  //65-77->+13 A-M; 78-90->-13 N-Z
  return result.join('');
}

// Change the inputs below to test
rot13("LBH QVQ VG!");
