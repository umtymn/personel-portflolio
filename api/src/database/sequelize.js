import { Sequelize } from 'sequelize';
import Messages from '../models/userMessagesModel.js';

const sequelize = new Sequelize('portfolio', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    await Messages.sync();

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error(error);
  }
};

connectToDatabase();