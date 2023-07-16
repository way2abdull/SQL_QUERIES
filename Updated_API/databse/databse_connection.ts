import{ Sequelize } from 'sequelize';

console.log("starting connection")
export const sequelize = new Sequelize('postgres', 'postgres', '    ', {
  host: 'localhost',
  dialect:'postgres'
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