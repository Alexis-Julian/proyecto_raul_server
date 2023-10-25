/* Etiquetas del DOM */
export const panel_chat = document.getElementById('panel_chat');
export const list_friends = document.getElementById('list_friends');

/* Funcionalidades */
import { socket as ConnectingToServer } from './socket.js';
import { Listener as ConnectingToListener } from './listener.js';
import { ON_CHANGE_CHAT } from './socket.js';

/* import { EMIT_CHANGE_CHAT } from './socket.js'; */

ConnectingToListener(); //Conecta los eventos a la pagina

ConnectingToServer; // Conecta a las personas al servidor

ON_CHANGE_CHAT(); //Socket de chat escuchando
