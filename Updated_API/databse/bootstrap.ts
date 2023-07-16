import { sequelize } from "./databse_connection";


export const postgesConnect = async () => {
    try {
        // console.log(`------conecction pg started-----------`,sequelize);
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
