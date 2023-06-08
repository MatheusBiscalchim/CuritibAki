import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  nome : {
    type: String,
    required:true,
  },
  email : {
    type: String,
    required:true,
    unique:true,
    lowercase: true,
  },
  senha : {
    type: String,
    required:true,
    select: false,
  }, 
})

UserSchema.pre("save", async function(next){
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

UserSchema.pre('findOneAndUpdate', async function(next) {
  const update = this.getUpdate();
  
  const senha = update.senha;

  if (senha) {
    update.senha = await bcrypt.hash(senha, 10);
  };

  next();
});

const User = mongoose.model("Usuario", UserSchema);

export default User;