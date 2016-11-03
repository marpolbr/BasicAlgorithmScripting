
function palindrome(str) {
  
  var strBefore = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var strAfter = strBefore.split('').reverse().join('');
  
  var pali;
  if(strBefore===strAfter){
    pali = true;
  }
  else{
    pali = false;
  }
  return pali;
}



palindrome("2_A3*3#A2");
