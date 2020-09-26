const { doubleANumber } = require('./doubleANumber');

const MAX_NUM = 10_000;
const REPS = 100;

const testTheFunctions = input => {
  const expectedAnswer = input * 2;
  it(`should return ${expectedAnswer} when input is ${input}`, () => {
    expect(doubleANumber(input)).toBe(expectedAnswer);
  });
}

describe('doubleANumber', () => {
  describe('from -10 to 10', () => {
    for (let input = -10; input <= 10; input += 1) {
      testTheFunctions(input);
    }
  });

  describe(`for ${REPS} random integers`, () => {
    for (let i = 0; i < REPS; i += 1) {
      const direction = i%2 ? 1 : -1;
      const input = Math.ceil(Math.random() * MAX_NUM) * direction;
      testTheFunctions(input);
    }
  });

  describe(`for ${REPS} random decimal numbers`, () => {
    for (let i = 0; i < REPS; i += 1) {
      const direction = i%2 ? 1 : -1;
      const input = Math.random() * MAX_NUM * direction;
      testTheFunctions(input);
    }
  });
});
