const darkMode = require('dark-mode')
const zazuDarkMode = require('../src/index')

describe('zazu-dark-mode', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('calls darkMode.toggle', () => {
    darkMode.toggle = jest.fn(() => new Promise(resolve => resolve()))

    return zazuDarkMode()()
      .then(msg => {
        expect(darkMode.toggle).toHaveBeenCalled()
        expect(msg).toEqual('toggled dark mode')
      })
  })

  test('logs an error', () => {
    console.error = jest.fn()
    darkMode.toggle = jest.fn(() => new Promise((resolve, reject) => reject(new Error())))

    return zazuDarkMode()()
      .then(msg => {
        expect(console.error).toHaveBeenCalled()
        expect(msg).toEqual('toggled dark mode')
      })
  })
})
