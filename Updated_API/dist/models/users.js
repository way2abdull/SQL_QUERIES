"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const databse_connection_1 = require("../databse/databse_connection");
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize();
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: databse_connection_1.sequelize,
    modelName: 'Users'
});
console.log(Users === databse_connection_1.sequelize.models.User);
Users.sync().then(() => {
    console.log('created');
}).catch((err) => {
    console.log(err);
});
exports.default = Users;
//# sourceMappingURL=users.js.map