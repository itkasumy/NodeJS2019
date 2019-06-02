process.argv.forEach((val, index, arr) => {
  console.log(val, index, arr)
})

// process.kill(5915)

console.log(process.cwd())
console.log(__dirname)
process.chdir('..')
console.log(process.cwd())
console.log(__dirname)
