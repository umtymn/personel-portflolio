import { DataTypes, Sequelize } from 'sequelize';

const sequelize = new Sequelize('portfolio', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const Messages = sequelize.define('Messages', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull:true,
  },
  message:{
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default Messages;
