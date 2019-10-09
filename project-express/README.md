# Amit beállítottam: Elvileg a package.json-ben minden benne van szóval csak npm i-t kell nyomnotok

## Template motor váltás:
 *  npm i pug
 * 	app.js file-ban:
 * 	app.set('view engine', 'pug');
 * 	fájlok kiterjesztésének átnevezése views-ben 

## CORS
 * app.use((req, res, next) => {
 *   res.setHeader('Access-Control-Allow-Origin', '*');
 *   res.setHeader('Access-Control-Allow-Headers', '*');
 *   res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
 *   next();
 * });

## MariaDB
 * npm i mariadb

## Bootstrap
 * npm i --save bootstrap
 * layout.pug --> link(rel='stylesheet' href='/css/bootstrap.min.css')
 * app.js --> app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
 * http://localhost:3005 meg kell jelennie egy "Bootstrap works! :)" feliratú gombnak

## api.js
 * routes/api/api.js
 * DB.js példányosítás
 * app.js-be bent van a middleware

## DB.js
 * modules/DB.js
 * pool-t létrehoztam 
 * adatbázis neve --> webshop

## .gitignore fájl létrehozása
 * node_modules

            

