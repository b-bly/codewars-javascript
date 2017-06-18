//https://www.codewars.com/kata/automaton-part-1/train/javascript

function automaton(e) {
	if (typeof e === "string") {
		var len = e.match(/[aeiyuo]/g, "")
    return len === null ? 0 : len.length;
	} else if (typeof e === "number") {
		if (Math.floor(e) !== e + 1) return false;

		for (var i = 2; i < e; i++) if (e % i < 1) return false;

		return true;
	} else if (typeof e === "object") {
		var a = {};

		for (var k in e) a[e[k]] = e[k] + "";

		return a;
	}
}
