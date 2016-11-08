
function palindrome(str) {
  
  var strBefore = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var strAfter = strBefore.split('').reverse().join('');
  
  return strBefore===strAfter;

}

palindrome("2_A3*3#A2");
