// Test file for advanced feature
const { advancedCalculation } = require('../src/advanced-feature');

describe('Advanced Feature Tests', () => {
    test('should handle division correctly', () => {
        expect(advancedCalculation(10, 2, 'divide')).toBe(5);
    });
    test('should handle complex operations', () => {
        // This test will fail because complexVariable is undefined
        expect(() => advancedCalculation(5, 3, 'complex')).toThrow();
    });

    test('should handle unknown operations', () => {
        expect(() => advancedCalculation(5, 3, 'unknown')).toThrow();
    });
});
