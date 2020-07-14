const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

let shoes1 = new CatalogItem("versice", 12);
let shoes2 = new CatalogItem("nike", 12);

let beer = new CatalogItem("tiger", 123);
let wine = new CatalogItem("xo", 1234);

let shoes_group = new CatalogGroup("shoesG", [shoes1, shoes2]);
let alcohol_group = new CatalogGroup("alcoG", [beer, wine]);

let key = new CatalogItem("the single key", 122222);

let store_catalog = new CatalogGroup("my_catalog", [shoes_group, alcohol_group, key]);

console.log(store_catalog.total);