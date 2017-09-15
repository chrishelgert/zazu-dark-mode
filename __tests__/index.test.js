const darkMode = require('dark-mode')
const zazuDarkMode = require('../src/index')

describe('zazu-dark-mode', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })

  test('calls darkMode.toggle', () => {
    darkMode.toggle = jest.fn(() => new Promise(resolve => resolve()))

    zazuDarkMode()()

    expect(darkMode.toggle).toHaveBeenCalled()
  })

  test('logs an error', (done) => {
    console.error = jest.fn()
    darkMode.toggle = jest.fn(() => new Promise((resolve, reject) => reject(new Error())))

    zazuDarkMode()()

    setTimeout(() => {
      expect(console.error).toHaveBeenCalled()
      done()
    }, 10)
  })
})
