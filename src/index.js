const darkMode = require('dark-mode')

module.exports = () => () => new Promise(resolve => {
  darkMode.toggle()
    .then(() => resolve('toggled dark mode'))
    .catch((error) => {
      console.error(error)
      // jxa fails sometimes but changes the dark mode
      resolve('toggled dark mode')
    })
})
