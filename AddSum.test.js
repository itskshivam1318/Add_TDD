let Add = require('./AddSum')


describe('', () => {
    test('results 0 for empty string', () => {
        expect(Add("")).toBe(0)
    })
    test('results 1 for string "1"', () => {
        expect(Add("1")).toBe(1)
    })
    test('handles string with 2 numbers', () => {
        expect(Add("1,2")).toBe(3)
    })
    test('handles string with multiple number', () => {
        expect(Add("1,2,3")).toBe(6)
    })
    test('handles \n in string', () => {
        expect(Add("1\n2,3")).toBe(6)
    })
    test('handles delimter in string', () => {
        expect(Add("//;\n1;2")).toBe(3)
    })

    test('handles Negative number exception', () => {
        expect(() => Add('-1,2')).toThrow('negatives not allowed')
    })
})