const create = (req,res)  => {
  const {nome,email,senha} = req.body;

  if (!nome || !email || !senha ) {
    res.status(400).send({mensagem:"Envie todos os campos para registrar"})
  }

  res.status(201).send({
    mensagem:"Usuario criado com sucesso",
    usuario:{
      nome,
      email
    }
  });
};
  
module.exports = { create };