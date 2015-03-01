/*
  This function should accept two numbers as parameters.
  It should return the value of the larger number.
*/
function max(a, b) {
	if (a > b){
		return a
	}
	else {
		return b
	}
};

/*
  This function should accept THREE numbers as parameters.
  It should return the value of the largest number.
  You should make use of the max() function you just wrote.
*/

function maxOfThree(a, b, c) {
	var firstValue = max(a, b)
	var secondValue = max(b, c)
	if (firstValue > secondValue) {
		return firstValue
	}
	else {
		return secondValue
	}
};