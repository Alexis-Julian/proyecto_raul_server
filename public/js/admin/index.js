import { ListProducts } from './listener.js';

const btn_user = document.getElementById('btn_user');

btn_user.addEventListener('click', ListProducts);

// Crear un nuevo Web Worker

// Escuchar mensajes del Web Worker
/* work.onmessage = function (event) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Mensaje del Web Worker: ${event.data}`;
}; */

// Enviar un mensaje al Web Worker
/* const message = 'Hola desde el hilo principal';
work.postMessage(message); */
