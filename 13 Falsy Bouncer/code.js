
function bouncer(arr) {

  function falsyValues(value) {
      return value;
  }

  var filtered = arr.filter(falsyValues);
  return filtered;
}


bouncer([7, "ate", "", false, 9]);
