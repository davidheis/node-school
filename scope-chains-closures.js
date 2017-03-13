function foo(){
	var bar = 1;
	quux = 0;
	function zip(){
		var quux;
		bar = true;
	}
	return zip;
}