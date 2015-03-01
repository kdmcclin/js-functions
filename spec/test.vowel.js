describe("Vowel functions", function(){
  
  describe("isVowel", function(){

    it("should return multiplied values", function(){

      expect(isVowel("a")).toEqual(true);
      expect(isVowel("d")).toEqual(false);
      expect(isVowel("y")).toEqual(false);

      // It should be okay with capitalized letters
      expect(isVowel("E")).toEqual(true);
      expect(isVowel("Q")).toEqual(false);
      
      // And always be wary of messed up input...
      expect(isVowel(" ")).toEqual(false);
      expect(isVowel("")).toEqual(false);

    });

  });

  describe("countVowels", function(){

    it("should return vowel counts", function(){

      expect(countVowels("Hello, World")).toEqual(3);
      expect(countVowels("The Iron Yard")).toEqual(4);
      expect(countVowels("JavaScript Is Great")).toEqual(6);

    });

  });

})