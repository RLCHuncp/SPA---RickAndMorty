import router from './routes';

// Cuando carga por primera vez
window.addEventListener('load', router);
//Encargado de escuchar a las rutas, cada vez que hay cambios
window.addEventListener('hashchange', router);
