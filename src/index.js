const darkMode = require('dark-mode')

module.exports = () => () => darkMode.toggle()
  .catch((error) => {
    console.error(error)
  })
