import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  nome : {
    type: String,
    required:true,
  },
  email : {
    type: String,
    required:true,
    unique:true,
  },
  senha : {
    type: String,
    required:true,
  },
})

const User = mongoose.model("Usuario", UserSchema);

export default User;