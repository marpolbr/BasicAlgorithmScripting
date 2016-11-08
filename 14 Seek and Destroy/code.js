
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  args.splice(0,1);  
  
  function x(element){
    return args.indexOf(element) === -1;
  }
  
  return arr.filter(x);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
