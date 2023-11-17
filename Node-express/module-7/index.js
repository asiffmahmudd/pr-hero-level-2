const {a, add} = require('./local-1')
const {a: a2, add: add2} = require('./local-2')

console.log(add(2,3))
console.log(a2, add2(1,2,3))

//built-in-modules

const path = require("path")
console.log(path.parse("C:/Users/Asif Mahmud/Desktop/pr-hero-level-2/Node-express/module-7/index.js"))
console.log(path.join("C:/Users/Asif Mahmud/Desktop/pr-hero-level-2/Node-express/module-7/", "index.js"))

