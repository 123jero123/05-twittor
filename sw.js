const STATIC_CACHE = 'static_v1';
const DYNAMIC_CACHE = 'dynamic_v1';
const INMUTABLE_CACHE = 'inmutable_v1';

const APP_SHELL = [
    '/',
    'index.html',
    'css/style.css',
    'img/favicon.ico',
    'img/avatars/hulk.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/spiderman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/wolverine.jpg',
    'js/app.js'
];

/*const APP_SHELL_INMUTABLE = [
    'h'
];*/

self.addEventListener('install',e=>{
    const cacheStatic = caches.open(STATIC_CACHE).then(cache=>
        cache.addAll(APP_SHELL));
    const cacheInmutable = caches.open(INMUTABLE_CACHE).then(cache=>
        cache.addAll(APP_SHELL_INMUTABLE));
    e.waitUntil(Promise.all([cacheStatic,cacheInmutable]));
});

