const userSerivce = require('../services/user.serivce');

const create = async(req,res)  => {
  const {nome,email,senha} = req.body;

  if (!nome || !email || !senha ) {
    res.status(400).send({mensagem:"Envie todos os campos para registrar"});
  }

  const user = await userSerivce.createService(req.body);

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
  
const findAll = async(req,res)  => {
  const users = await userSerivce.findAllService();
  
  if(users.length === 0){
    return res.status(400).send({message: "Não há usuarios cadastrados"});
  }

  res.send(users)
};

const findById = async(req,res) => {
  const id = req.params.id;
  
  const user = await userSerivce.findByIdService(id);

  res.send(user);
};

const findByEmail = async(req,res) => {
  const email = req.params.email;
  
  const user = await userSerivce.findByEmailService({email:email});

  res.send(user);
};

const update = async(req,res) => {
  const {nome,email,senha} = req.body;

  if (!nome && !email && !senha ) {
    res.status(400).send({mensagem:"Envie pelo menos um campo para atualizar"});
  }

  const id = req.params.id;

  await userSerivce.updateService(
    id,
    nome,
    email,
    senha
  );

  res.send({message:"Usuário atualizado com sucesso"})
};

const deleteById = async(req,res) => {
  const id = req.params.id;

  await userSerivce.deleteService(id);

  res.status(200).send({message:"Usuario deletado com sucesso"})
};

module.exports = { create, findAll, findById, findByEmail, update, deleteById };