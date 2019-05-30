const Sequelize = require('sequelize');
const db = require('./db');

const BaBeer = db.define('beer', {
  name: Sequelize.TEXT,
  brewery: Sequelize.TEXT,
  breweryId: Sequelize.BIGINT,
  link: Sequelize.TEXT,
  style: Sequelize.TEXT,
  abv: Sequelize.FLOAT,
  ratings: Sequelize.BIGINT,
  score: Sequelize.FLOAT,
});
// {
//   classMethods: {
BaBeer.getSearchVector = function() {
  return 'beerText';
};

BaBeer.addFullTextIndex = function() {
  if (db.options.dialect !== 'postgres') {
    console.log('Not creating search index, must be using POSTGRES to do this');
    return;
  }

  var searchFields = ['name', 'brewery'];
  var beer = this;

  var vectorName = beer.getSearchVector();
  db.query(
    'ALTER TABLE "' +
      beer.tableName +
      '" ADD COLUMN "' +
      vectorName +
      '" TSVECTOR'
  )
    .then(function() {
      return db
        .query(
          'UPDATE "' +
            beer.tableName +
            '" SET "' +
            vectorName +
            "\" = to_tsvector('english', " +
            searchFields.join(" || ' ' || ") +
            ')'
        )
        .catch(console.log);
    })
    .then(function() {
      return db
        .query(
          'CREATE INDEX beer_search_idx ON "' +
            beer.tableName +
            '" USING gin("' +
            vectorName +
            '");'
        )
        .catch(console.log);
    })
    .then(function() {
      return db
        .query(
          'CREATE TRIGGER beer_vector_update BEFORE INSERT OR UPDATE ON "' +
            beer.tableName +
            '" FOR EACH ROW EXECUTE PROCEDURE tsvector_update_trigger("' +
            vectorName +
            "\", 'pg_catalog.english', " +
            searchFields.join(', ') +
            ')'
        )
        .catch(console.log);
    })
    .catch(console.log);
};

BaBeer.search = function(query) {
  if (db.options.dialect !== 'postgres') {
    console.log('Search is only implemented on POSTGRES database');
    return;
  }

  var beer = this;

  query = db.getQueryInterface().escape(query);
  console.log(query);

  return db.query(
    'SELECT * FROM "' +
      beer.tableName +
      '" WHERE "' +
      beer.getSearchVector() +
      "\" @@ plainto_tsquery('english', " +
      query +
      ')',
    beer
  );
};

module.exports = { BaBeer };
