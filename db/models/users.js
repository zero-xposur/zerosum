const { connection, Sequelize } = require('../connection')

const User = connection.define('user', {
  name: Sequelize.TEXT,
  facebookId: Sequelize.TEXT,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        args: true,
        msg: "User must have an email address"
      },
      isEmail: {
        args: true,
        msg: "Please enter a valid email address"
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      minLength(password){
        if(password.length < 3){
          throw new Error("Password must be at least 5 characters.");
        }
      }
    }
  },
})

module.exports = User
