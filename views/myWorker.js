// myWorker.js
self.onmessage = function (event) {
  const message = event.data;

  // Realiza alguna tarea en el Web Worker
  const result = `Mensaje recibido en el Web Worker: ${message}`;

  // Envía el resultado de vuelta al hilo principal
  self.postMessage(result);
};
