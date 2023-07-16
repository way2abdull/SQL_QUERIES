import { sequelize } from "../databse/databse_connection";
import {Model, DataTypes, Sequelize} from 'sequelize';
// const sequelize = new Sequelize();


export class Users extends Model {
    public user_id!: number;
}

Users.init({
  
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING

  }
}, {
  sequelize,
  modelName: 'Users'
});

console.log(Users === sequelize.models.User);
Users.sync().then(()=>{
  console.log('created');
  
}).catch((err:Error)=>{
console.log(err);
})
export default Users

