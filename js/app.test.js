import { loop } from './app.js';

describe('Given function loop', () => {
    describe('When board is', () => {
        test('should return board', () => {
            // arrange
            const expectedResult = [
                [0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 1, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            // act
            const result = loop();
            // assert
            expect(result).toBe(expectedResult);
        });
    });
});
