/**
 * Left Pad a Number to Ensure that it is two digits.
 * @param  {int} number
 * @return {String} Left padded result
 */
function zeroPad(number) {
	return number < 10 ? '0' + number : '' + number;
  }
  
  /**
   * Cycle the first element of an array to the back
   * @param {Array} arr 
   */
  function cycleArray(arr){
	let first = arr.shift();
	arr.push(first);
	return arr;
  }
  
  function fileExists(filepath){
	var http = new XMLHttpRequest();
  
	http.open('HEAD', filepath, false);
	http.send();
  
	return http.status != 404;
  }
  
  /**
   * Join a variable amount of arguments with '/' as a 
   * seperator
   */
  function join(){
	let s = '';
	for(var i in arguments){
	  var arg = arguments[i];
	  s += arg 
	  
	  if(i != arguments.length - 1) 
		s += '/'
	};
	return s;
  }
  
  function formatTwitterHandle(name){
	return `<img src="" height="30px" width="30px" onerror='this.style.display = "none"/>@${name}`;
  }
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  