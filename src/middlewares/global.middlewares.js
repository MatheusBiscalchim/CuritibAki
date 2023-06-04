import mongoose from 'mongoose';
import userSerivce from '../services/user.serivce.js';

export const validId = (req,res,next) => {
  try{const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id inválido" });
  }

  req.id = id;

  next();
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

export const validEmail = async (req,res,next) => {
  try{const email = req.params.email;

  const user=await userSerivce.findByEmailService({email:email});

  if (user.length===0) {
    return res.status(400).send({ message: "Email não encontrado" });
  }

  req.email = email;
  req.user = user;

  next();
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

export const validUser = async (req,res,next) => {
  try{const id = req.params.id;
 
  const user = await userSerivce.findByIdService(id);

  if (!user) {
    return res.status(400).send({ message: "Usuario não encontrado" });
  }

  req.id = id;
  req.user = user;

  next();
} catch (err) {
  res.status(500).send( {message: err.message})
}
};
