/*
  This function should accept two numbers as parameters.
  It should return the value of the numbers multiplied together.
*/

function multiply(a, b) {
	return a * b;
}

/*
  This function should accept two numbers as parameters.
  We can assume that both numbers are positive integers.
  It should return the value of the base, raised to the exponent-th power.
  You should make use of the multiply() function you just wrote.
*/

function power(base, exponent) {
		
	counter=1;
	
	for(var i=0; i < exponent ; i++){
		counter=(multiply(base, counter));

	}
	return counter;
}

// General math exponent rule - derivatives	
// 	x^n = n*x^n-1
// 3 ^ 4 = 81