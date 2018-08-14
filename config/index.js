// let paths = {
//     base: process.env.USER_URL,
//     apiUser: process.env.USER_API,
//     apiCity:process.env.CITY_API
// };

// if ( window.location.protocol == 'https:' ) {
//     Object.keys( paths ).map( path => {
//         let newPath = paths[path].replace('http', 'https');

//         paths[path] = newPath;
//     } );
// }

export const USER_URL = paths.base;

export const USER_API = paths.apiUser;//用户中心API地址

export const CITY_API = paths.apiCity;//城市服务商API地址

export const WWW_URL = process.env.WWW_URL;

export const WORKER_URL = process.env.WORKER_URL;

export const SERVICE_URL = process.env.SERVICE_URL;

export const EVENT_URL = process.env.EVENT_URL;

export const FRONTEND_URL = process.env.FRONTEND_URL;

export const APP_URL = process.env.APP_URL;
