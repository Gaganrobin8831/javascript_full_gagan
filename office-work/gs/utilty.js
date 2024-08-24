
const path = require('path')

function createpPath(pathOfDir) {
  const parsedPath = path.parse(pathOfDir)
  // console.log(`Directory: ${parsedPath.dir}`)
  // console.log(`File Name: ${parsedPath.name}`)
  // console.log(`Extension: ${parsedPath.ext}`)

  return ` 
          {[The Directory is :  ${parsedPath.dir}],
          [The File name is : ${parsedPath.name}],
          [The Extension is : ${parsedPath.ext}]}
          
          `
}

// createpPath('C:\\Users\\pc1\\Desktop\\gs\\eventEmiter\\example.txt')
module.exports = createpPath
