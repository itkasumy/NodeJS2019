console.log('main process01')

setTimeout(() => {
  console.log('setTimeout process01')
  setTimeout(() => {
    console.log('setTimeout process02')
  }, 0)
}, 0)

process.nextTick(() => {
  console.log('nextTick process01')
  process.nextTick(() => {
    console.log('nextTick process02')
    process.nextTick(() => {
      console.log('nextTick process03')
    })
  })
})

console.log('main process02')
