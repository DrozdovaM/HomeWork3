


(function () {
  	var log = console.log;
	console.log = function () {
  	let arr = arguments;
  	localStorage.setItem('Arr',Array.prototype.join.call(arguments , " ; "));
    localStorage.setItem('arr1', arguments);  
  	document.body.style.background = 'black';
  	log.apply(this, Array.prototype.slice.call(arguments));
  };
}());