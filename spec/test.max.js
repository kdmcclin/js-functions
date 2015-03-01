describe("Max value functions", function(){

  describe("max", function(){

    it("should return the largest of two numbers", function(){

      expect(max(2, 3)).toEqual(3);
      expect(max(10, 4)).toEqual(10);
      expect(max(-9, -11)).toEqual(-9);
      expect(max(0, 0)).toEqual(0);

    });

  });

  describe("maxOfThree", function(){

    it("should return the largest of three numbers", function(){

      expect(maxOfThree(1, 2, 3)).toEqual(3);
      expect(maxOfThree(4, 7, -5)).toEqual(7);
      expect(maxOfThree(21, 21, 20)).toEqual(21);
      expect(maxOfThree(-1, -1, -1)).toEqual(-1);

    });

  });
    
});