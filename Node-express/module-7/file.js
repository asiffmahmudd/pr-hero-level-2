const fs = require('fs')

//reading a file text

const readText = fs.readFileSync('./text/read.txt')

//writing a text

const writtenText = fs.writeFileSync('./text/write.txt', readText + 'This is my written text')
console.log(readText)