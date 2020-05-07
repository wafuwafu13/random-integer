import RandomInteger from '../index';

const ri = new RandomInteger();

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
      const pass = received >= floor && received <= ceiling;
      if (pass) {
        return {
          message: () =>
            `expected ${received} not to be within range ${floor} - ${ceiling}`,
          pass: true,
        };
      } else {
        return {
          message: () =>
            `expected ${received} to be within range ${floor} - ${ceiling}`,
          pass: false,
        };
      }
    },

    toBeInteger(received) {
      if (Number.isInteger(received)) {
        return {
          message: () =>
            `expected ${received} not to be integer`,
          pass: true,
        }
      } else {
        return {
          message: () => 
            `expected ${received} to be integer`,
          pass: false
        };
      }
    },
});

test('should return 1 to 10 integer if the value "1 10" is passed',  () => {
    expect(ri.create(1, 10)).toBeWithinRange(1, 10)
    expect(ri.create(1, 10)).toBeInteger()
})

test('should return -10 to 0 integer if the value "-10 0" is passed',  () => {
    expect(ri.create(-10, 0)).toBeWithinRange(-10, 0)
    expect(ri.create(-10, 0)).toBeInteger()
})

test('should return 1 if the value "1 1" is passed',  () => {
    expect(ri.create(1, 1)).toBe(1)
})