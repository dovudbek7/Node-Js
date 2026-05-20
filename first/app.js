// const os = require("os")

// var totalMemory = os.totalmem
// var freeMemory = os.freemem

// console.log(`Free memory   ${freeMemory}`)
// console.log(`Total memory   ${totalMemory}`)

// const fs = require('fs')

// const files = fs.readSync('./')
// console.log(files)

// const EventEmitter = require("events")

// emitter.on("logging", data => {
//   console.log(data)
// })
// emitter.emit("logging", { id: 1, url: "http1" })

// const Logger = require("./logger")
// const logger = new Logger()

// logger.on("messageLogged", arg => {
//   console.log("Listener called", arg)
// })

// logger.log("mmmm")

const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world")
    res.end()
  }
  if (req.url === "/api") {
    res.write("Api")
    res.end()
  }
})

server.listen(3000)
console.log('Listing on port 3000...')
