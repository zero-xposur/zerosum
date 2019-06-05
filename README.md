# zerosum

Initilize db(once), or reseed.

```
createdb zerosum
npm run syncAndSeed
```

Start

```
npm run start:dev
```

Seed heroku db from local db. Tables must be empty, run `heroku pg:reset` to empty tables.

```
heroku pg:push zerosum DATABASE_URL --app zer0sum
```
