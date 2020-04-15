const fs = require('fs')

console.log('before fs.readFile call')
// const timFile = fs.readFileSync('tim.txt', 'utf8')
fs.readFile('timzzzzzzzz.txt', 'utf8', function (err, data) {
  if (err)  {
    console.log('uh -oh, that file does not exist?')
  } else {

    console.log("here is the actual file contents:")
    console.log(data)
  }
});
console.log('after fs.readFile call')
