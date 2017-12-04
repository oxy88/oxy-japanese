var fs = require('fs')
var fileName = './hiragana.json'

fs.readFile(fileName, (err, data) => {
  if (err) throw err
  var data = JSON.parse(data)
  data.forEach((elem, index, array) => {
    elem.id = index
  })
  data = JSON.stringify(data,null,2)
  fs.writeFile('./output.json', data, (result) => {
  console.log('ok')
  })
})
