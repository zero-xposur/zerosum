const { connection } = require('../connection');
const Sequelize = require('sequelize');

const Babeers = connection.define('babeer', {
    name: Sequelize.TEXT,
    brewery: Sequelize.TEXT,
    breweryId: Sequelize.INTEGER,
    link: Sequelize.TEXT,
    style: Sequelize.TEXT,
    abv: Sequelize.DOUBLE,
    ratings: Sequelize.INTEGER,
    score: Sequelize.DOUBLE,
});

// COPY public.babeers (id, name, brewery, "breweryId", link, style, abv, ratings, score, "createdAt", "updatedAt") FROM stdin;
// 1    1842	Plzeňský Prazdroj	1	https://www.beeradvocate.com/beer/profile/1/279167/	Bohemian Pilsener	4.40000000000000036	3	3.79999999999999982	2019-05-27 01:06:56.507-04	2019-05-27 01:06:56.507-04

Babeers.getSearchVector = function() {
    return 'beerText';
};

Babeers.addFullTextIndex = function() {
    if (connection.options.dialect !== 'postgres') {
        console.log(
            'Not creating search index, must be using POSTGRES to do this'
        );
        return;
    }

    var searchFields = ['name', 'brewery'];
    var beer = this;

    var vectorName = beer.getSearchVector();
    connection
        .query(
            'ALTER TABLE "' +
                beer.tableName +
                '" ADD COLUMN "' +
                vectorName +
                '" TSVECTOR'
        )
        .then(function() {
            return connection
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
            return connection
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
            return connection
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

Babeers.search = function(query) {
    if (connection.options.dialect !== 'postgres') {
        console.log('Search is only implemented on POSTGRES database');
        return;
    }

    var beer = this;

    query = connection.getQueryInterface().escape(query);
    console.log(query);

    return connection.query(
        'SELECT DISTINCT ON (link) * FROM "' +
            beer.tableName +
            '" WHERE ratings>2 AND "' +
            beer.getSearchVector() +
            "\" @@ plainto_tsquery('english', " +
            query +
            ') order by link, ratings desc',
        { type: Sequelize.QueryTypes.SELECT },
        beer
    );
};

module.exports = Babeers;
