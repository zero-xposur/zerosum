const { connection, Sequelize } = require('../connection');

const Babeers = connection.define('babeer', {
    name: Sequelize.TEXT,
    brewery: Sequelize.TEXT,
    breweryId: Sequelize.TEXT,
    link: Sequelize.TEXT,
    style: Sequelize.TEXT,
    abv: Sequelize.DOUBLE,
    ratings: Sequelize.TEXT,
    score: Sequelize.TEXT,
});

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
        'SELECT * FROM "' +
            beer.tableName +
            '" WHERE "' +
            beer.getSearchVector() +
            "\" @@ plainto_tsquery('english', " +
            query +
            ')',
        { type: Sequelize.QueryTypes.SELECT },
        beer
    );
};

module.exports = Babeers;
