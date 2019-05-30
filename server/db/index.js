const db = require('./db');
const { BaBeer } = require('./BaBeer');

const sync = () => {
  return (
    db
      .sync({ force: false })
      .then(() => console.log('db synced'))
      // .done(function() {
      //   BaBeer.addFullTextIndex();
      // });
      .catch(err => console.error(err))
  );
};

module.exports = { db, sync, BaBeer };
