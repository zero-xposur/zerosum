const { connection } = require('./connection')
const Sequelize = require('sequelize')

// models
const Users = require('./models/users')

// COPY public.babeers (id, name, brewery, "breweryId", link, style, abv, ratings, score, "createdAt", "updatedAt") FROM stdin;
// 1	1842	Plzeňský Prazdroj	1	https://www.beeradvocate.com/beer/profile/1/279167/	Bohemian Pilsener	4.40000000000000036	3	3.79999999999999982	2019-05-27 01:06:56.507-04	2019-05-27 01:06:56.507-04

const Babeers = connection.define('babeer', {
  name: Sequelize.TEXT,
  brewery: Sequelize.TEXT,
  breweryId: Sequelize.TEXT,
  link: Sequelize.TEXT,
  style: Sequelize.TEXT,
  abv: Sequelize.TEXT,
  ratings: Sequelize.TEXT,
  score: Sequelize.TEXT
})

// COPY public.prices (id, name, image, link, price, tags, description, quantity, "createdAt", "updatedAt") FROM stdin;
// 33097	Kona Castaway IPA	https://www.totalwine.com/media/sys_master/twmmedia/h51/h29/9687617339422.png	https://www.totalwine.com/beer/ale/ipa-india-pale-ale-/american-ipa/kona-castaway-ipa/p/137098901?s=909&igrules=true	159.990000000000009	{"United States",Hawaii,Ale,"IPA (India Pale Ale)","American IPA"}	Hawaii- American India Pale Ale (IPA)- 6.0% ABV. Kona Castaway, part of Kona's Aloha Series, is a uniquely Hawaiian IPA balanced with delightful tropical fruit notes. It can...	1/2 Keg	2019-05-26 21:10:22.068-04	2019-05-26 21:10:22.068-04

const Prices = connection.define('price', {
  name: Sequelize.TEXT,
  image: Sequelize.TEXT,
  link: Sequelize.TEXT,
  price: Sequelize.TEXT,
  tags: Sequelize.TEXT,
  description: Sequelize.TEXT,
  quantity: Sequelize.TEXT
})

connection.sync({ force: true })

// old json
// "seed": "psql zerosum < server/db/beerAppData.sql",
