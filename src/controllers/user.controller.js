const userSerivce = require('../services/user.serivce');

const create = async(req,res)  => {
  const {nome,email,senha} = req.body;

  if (!nome || !email || !senha ) {
    res.status(400).send({mensagem:"Envie todos os campos para registrar"})
  }

  const user = await userSerivce.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Erro na criação de usuário" });
  }

  res.status(201).send({
    mensagem:"Usuario criado com sucesso",
    usuario:{
      id:user._id,
      nome,
      email
    }
  });
};
  
module.exports = { create };