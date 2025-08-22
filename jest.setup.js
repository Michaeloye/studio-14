import '@testing-library/jest-dom'

global.structuredClone = global.structuredClone || ((value) => JSON.parse(JSON.stringify(value)))

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  usePathname() {
    return '/'
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
    warning: jest.fn(),
  },
}))

Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true,
})

Element.prototype.getBoundingClientRect = jest.fn(() => ({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
  toJSON: jest.fn(),
}))

Object.defineProperty(window, 'pageYOffset', {
  value: 0,
  writable: true,
})
