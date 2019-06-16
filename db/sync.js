const { connection } = require('./connection');
// models
// const Babeers = require('./models/babeers');
const { Babeers, Price, User, UserRating, Follow } = require('./models');

// COPY public.babeers (id, name, brewery, "breweryId", link, style, abv, ratings, score, "createdAt", "updatedAt") FROM stdin;
// 1	1842	Plzeňský Prazdroj	1	https://www.beeradvocate.com/beer/profile/1/279167/	Bohemian Pilsener	4.40000000000000036	3	3.79999999999999982	2019-05-27 01:06:56.507-04	2019-05-27 01:06:56.507-04

connection
    .sync({ force: true })
    .then(() => Babeers.addFullTextIndex())
    .then(() =>
        User.create({
            name: 'test1',
            email: '123a@email.com',
            password: 'abcd',
        })
    )
    .then(() =>
        User.create({
            name: 'test2',
            email: '123b@email.com',
            password: 'abcd',
        })
    )
    .then(() =>
        User.create({
            name: 'test3',
            email: '123c@email.com',
            password: 'abcd',
        })
    )
    .then(() =>
        User.create({
            name: 'test4',
            email: '123d@email.com',
            password: 'abcd',
        })
    )
    .then(() =>
        User.create({
            name: 'test5',
            email: '123e@email.com',
            password: 'abcd',
        })
    );

// old json
// "seed": "psql zerosum < server/db/beerAppData.sql",
