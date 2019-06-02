process.stdout.write('hello')

console.log(process.pid)

process.stdin.on('data', data => {
  process.stdout.write(data)
})

process.on('exit', () => {
  console.log('退出了')
})
