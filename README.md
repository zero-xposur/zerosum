# zerosum

Initilize db(once), or reseed.

```bash
npm install
createdb zerosum
npm run syncAndSeed:dev
```

Local Start

```
npm run start:dev
```

# Heroku

Deployment: https://zer0sum.herokuapp.com

-   Push dev or feature branch to heroku's master.

```bash
git push heroku dev:master
```

-   Seed heroku db from local db. Heroku tables must be empty before being `push`ed, run `heroku pg:reset` to empty tables. This will push your full zerosum db to heroku db. if you are using a free heroku postgres db (_hobby-dev_), ensure total record count is **< 10,000**.

```bash
heroku addons:create heroku-postgresql:hobby-dev #free postgres db
heroku pg:push zerosum DATABASE_URL --app zer0sum
```
