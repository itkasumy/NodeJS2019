const fs = require('fs')

// fs.mkdir('./tmp', { recursive: true }, err => {
//   if (err) throw err
// })

// fs.stat('./tmp', (err, stat) => {
//   console.log(stat.isDirectory())
// })

// fs.readdir('./tmp', (err, files) => {
//   console.log(files)
// })

const wenjianjia = []
fs.readdir('./tmp', (err, files) => {
  // console.log(files)
  for (let i = 0; i < files.length; i++) {
    var filename = files[i]
    fs.stat(`./tmp/${filename}`, (err, stat) => {
      if (stat.isDirectory()) {
        wenjianjia.push(filename)
      }
    })
  }
  console.log(wenjianjia)
})

console.log(wenjianjia)
