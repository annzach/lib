const mongoose = require('mongoose');

const contactListSchema = new mongoose.Schema({
  name:{type:String, required:true},
  phonenumber:{type:Number, required:true},
  image:{type:String},
  address: {type:String}
});

const ContactList = mongoose.model('ContactList', contactListSchema);
module.exports =ContactList;