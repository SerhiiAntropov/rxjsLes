import "./plain_js.scss";
import indexedDbService from "./js/services/indexedDbService";
import curry from "./js/js_lessons";

console.time('full process');

const idb = await indexedDbService.openDb();

console.log('out of openDb', idb);

console.timeEnd('full process');

const sum1 = curry((a, b, c) => a + b + c);

const res1 = sum1(1, 2);

const res2 = res1(3);

console.log(sum1(1, 2)(3));
