self.addEventListener('install', (event) => {
  console.log('Inside the `install` handler:', event)
})

self.addEventListener('activate', (event) => {
  console.log('Inside the `activate` handler:', event)
})

self.addEventListener('message', event => {
  // event => ExtendableMessageEvent object
  console.log(`The client sent me a message: ${event.data}`)
  event.source.postMessage("Hi client")
})
