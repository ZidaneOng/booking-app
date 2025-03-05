import {addition} from '../Calculator'

describe("addition", () => {
  it("executes code", () => {
    expect(true).toBe(true);
  })

  describe("can add 2 numbers", () => {
    it("should return the sum of 2 numbers in an array", () => {
      const result1 = addition([2, 3]);

      expect(result1).toBe(5);

      
      const result2 = addition([3, 3]);

      expect(result2).toBe(6);
      
    })

    
    it("should return the sum of 4 numbers", () => {
      const result1 = addition([1, 2, 3, 4]);

      expect(result1).toBe(10);
    })


    it("should return the sum of 4 even numbers", () => {
      const result1 = addition([2, 4, 6, 8]);

      expect(result1).toBe(20);
    })
    
  })
})


import {subtraction} from '../Calculator'
describe("subtraction", () => {
  it("executes code", () => {
    expect(true).toBe(true);
  })
    describe("can subtract 2 numbers", () => {
    it("should return the difference of 2 numbers in an array", () => {
      const result1 = subtraction([5, 3]);

      expect(result1).toBe(2); 

      
      const result2 = subtraction([9, 3]);

      expect(result2).toBe(6);
      
    })

    
    it("should return the difference of 4 numbers", () => {
      const result1 = subtraction([5, 3, 1, 20]);

      expect(result1).toBe(11);
    })


    it("should return the difference of 4 even numbers", () => {
      const result1 = subtraction([2, 4, 6, 20]);

      expect(result1).toBe(8);
    })
    
  })
})


import {multiplication} from '../Calculator'

describe("multiplication", () => {
  it("executes code", () => {
    expect(true).toBe(true);
  })
    describe("can multiply 2 numbers", () => {
    it("should return the sum of 2 product in an array", () => {
  
      const result1 = multiplication([5, 2]);

      expect(result1).toBe(10);

      
      const result2 = multiplication([9, 3]);

      expect(result2).toBe(27);
      
    })

    
    it("should return the product of 4 numbers", () => {
      const result1 = multiplication([5, 3, 1, 2]);

      expect(result1).toBe(30);
    })


    it("should return the product of 4 even numbers", () => {
      const result1 = multiplication([2, 4, 6, 2]);

      expect(result1).toBe(96);
    })
    
  })
})


import {division} from '../Calculator'
describe("division", () => {
  it("executes code", () => {
    expect(true).toBe(true);
  })
    describe("can quotient 2 numbers", () => {
    it("should return the quotient of 2 numbers in an array", () => {
      const result1 = division([6, 3]);

      expect(result1).toBe(2); 

      
      const result2 = division([9, 3]);

      expect(result2).toBe(3);
      
    })

    
    it("should return the quotient of 4 numbers", () => {
      const result1 = division([4, 1, 2, 40]);

      expect(result1).toBe(5);
    })


    it("should return the quotient of 4 even numbers", () => {
      const result1 = division([2, 4, 4, 800]);

      expect(result1).toBe(25);
    })
    
  })
})