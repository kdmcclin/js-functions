/*
  This function should accept a single-letter string as a parameter.
  It should return true if the string is a vowel.
  (For the sake of argument, let's make Y count as a consonant today.)
  Otherwise, it should return false.

  Hint: string.toLowerCase()
*/
function isVowel(letter) {
	var letter = letter.toLowerCase();
	return /[aeiou]/.test(letter);
}

/*
  This function should accept a string as a parameter.
  It should return the number of vowels in the string.
  You should make use of the isVowel() function you just wrote.

  Hint: string[0] returns the 1st character in the string
*/

function countVowels(word) {
	counter = 0

	for (var i = 0; i < word.length; i++){
		if (isVowel(word[i])){
			counter = counter + 1
		}
	}
	return counter
}
