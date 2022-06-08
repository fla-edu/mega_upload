const http = require('http')
const PORT = 3000

const handler = function (request, response) {
  const defaultRoute = async (request, response) => response.end('Hello!')

  return defaultRoute(request, response)
}

const server = http.createServer(handler)

const startServer = () => {
  console.log(`App running at http://localhost:${PORT}`)
}

server.listen(PORT, startServer)