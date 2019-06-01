const { connection } = require('./connection');
// models
const Babeers = require('./models/babeers');

// COPY public.babeers (id, name, brewery, "breweryId", link, style, abv, ratings, score, "createdAt", "updatedAt") FROM stdin;
// 1	1842	Plzeňský Prazdroj	1	https://www.beeradvocate.com/beer/profile/1/279167/	Bohemian Pilsener	4.40000000000000036	3	3.79999999999999982	2019-05-27 01:06:56.507-04	2019-05-27 01:06:56.507-04

connection.sync({ force: true }).then(() => Babeers.addFullTextIndex());

// old json
// "seed": "psql zerosum < server/db/beerAppData.sql",
