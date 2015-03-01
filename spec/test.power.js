describe("Multiplication and Exponent functions", function(){
  
  describe("multiply", function(){

    it("should return multiplied values", function(){

      expect(multiply(2, 3)).toEqual(6);
      expect(multiply(10, 4)).toEqual(40);
      expect(multiply(-9, 5)).toEqual(-45);
      expect(multiply(1, 0)).toEqual(0);

    });

  });

  describe("power", function(){

    it("should return the base to the exponent-th power", function(){

      expect(power(5, 2)).toEqual(25);
      expect(power(7, 1)).toEqual(7);
      expect(power(4, 3)).toEqual(64);
      expect(power(3, 4)).toEqual(81);
      
    });

  });

})