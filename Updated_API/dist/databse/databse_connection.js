"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
console.log("starting connection");
exports.sequelize = new sequelize_1.Sequelize('teasting', 'postgres', '    ', {
    host: 'localhost',
    dialect: 'postgres'
});
// export const sequelize = new Sequelize({
//     database: 'teasting',
//     username: 'postgres',
//     password: '    ',
//     host: 'localhost',
//     port: 5432,
//     dialect: 'postgres',
//   });
// console.log(sequelize);
//# sourceMappingURL=databse_connection.js.map