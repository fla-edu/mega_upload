const url = require('url')
class Routes {
  #io
  constructor(io) {
    this.#io = io
  }

  async post(request, response) {
    const { headers } = request
    const { query: { socketId }} = url.parse(request.url, true)

    console.log('Chamou! ', socketId)

    this.#io.to(socketId).emit('file-uploaded', 5e6)
    this.#io.to(socketId).emit('file-uploaded', 5e6)
    this.#io.to(socketId).emit('file-uploaded', 5e6)
    this.#io.to(socketId).emit('file-uploaded', 5e6)

    const onFinish = (response, redirectTo) => {
      response.writeHead(303, {
        Connection: 'close',
        Location: `${redirectTo}?msg=Files uploaded with success!`
      })

      response.end()
    }

    setTimeout(() => {
      return onFinish(response, headers.origin)
    }, 3000)
  }
}

module.exports = Routes