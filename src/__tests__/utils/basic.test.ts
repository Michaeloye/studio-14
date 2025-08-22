// Simple utility functions tests
describe('Basic Utilities', () => {
  describe('String operations', () => {
    it('can concatenate strings', () => {
      const result = 'Hello' + ' ' + 'World'
      expect(result).toBe('Hello World')
    })

    it('can check string length', () => {
      expect('test'.length).toBe(4)
      expect(''.length).toBe(0)
    })
  })

  describe('Array operations', () => {
    it('can filter arrays', () => {
      const numbers = [1, 2, 3, 4, 5]
      const evenNumbers = numbers.filter(n => n % 2 === 0)
      expect(evenNumbers).toEqual([2, 4])
    })

    it('can map arrays', () => {
      const numbers = [1, 2, 3]
      const doubled = numbers.map(n => n * 2)
      expect(doubled).toEqual([2, 4, 6])
    })
  })
})
