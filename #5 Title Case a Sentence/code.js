
function titleCase(str) {
  var a = str.toLowerCase().split(' ');
  for(var i=0; i<a.length; i++){
    a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  return a.join(' ');
}

titleCase("I'm a little tea pot");

