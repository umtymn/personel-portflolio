import Messages from "../models/userMessagesModel.js";

const getMessages= async () =>{
try {
  return await Messages.findAll();
} catch (error) {
  console.log(error)
}
};

const addMessages = async (pMessage)=>{
try {
  return await Messages.create(pMessage)
}catch (error) {
  console.log(error)
}
};

export {
  getMessages,
  addMessages
};