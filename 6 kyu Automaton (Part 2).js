//https://www.codewars.com/kata/automaton-part-2/train/javascript

function automaton(e) {
	if (typeof e === "string") {
  
		return e.replace(/[^aeiuo]/gi, "").length;
	} else if (typeof e === "number") {
    if (e % 1 != 0) return false;
		for (var i = 2; i <= Math.floor(Math.sqrt(e)); i++) {
      if (e % i < 1) return false;
    }

		return true;
	} else if (typeof e === "object") {
		var a = {};

		for (var k in e) a[e[k]] = k + "";

		return a;
	}
}
