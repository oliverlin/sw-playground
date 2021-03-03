if (navigator.serviceWorker) {

  navigator.serviceWorker
    .register('./sw.js')
    .then((registration) => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    })

  navigator.serviceWorker.addEventListener('message', event => {
    // event is a MessageEvent object
    console.log(`The service worker sent me a message: ${event.data}`)
  })

  document.querySelector('.message').addEventListener('click', function (event) {
    event.preventDefault();
    navigator.serviceWorker.ready.then(function (registration ) {
      registration.active.postMessage("Hi service worker")
    })
  })
}
