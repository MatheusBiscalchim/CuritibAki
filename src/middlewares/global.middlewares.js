const mongoose = require('mongoose');
const userSerivce = require('../services/user.serivce');

const validId = (req,res,next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id inválido" });
  }

  next();
};

const validEmail = async (req,res,next) => {
  const email = req.params.email;

  const user=await userSerivce.findByEmailService({email:email});

  if (user.length===0) {
    return res.status(400).send({ message: "Email não encontrado" });
  }

  next();
};

const validUser = async (req,res,next) => {
  const id = req.params.id;
 
  const user = await userSerivce.findByIdService(id);

  if (!user) {
    return res.status(400).send({ message: "Usuario não encontrado" });
  }

  next();
};

module.exports = { validId, validUser, validEmail };