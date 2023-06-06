import localsSerivce  from '../services/locals.serivce.js';

const create = async(req,res)  => {
  try{
    const {id,nome,slug,tipo,sobre,horarios,ingressos,endereco,foto,iframe} = req.body;

  if (!nome || !slug || !tipo || !sobre || !horarios || !ingressos || !endereco || !foto || !iframe ) {
    res.status(400).send({mensagem:"Envie todos os campos para registrar"});
  }

  const user = await localsSerivce.createService(req.body);

  if (!user) {
    return res.status(400).send({ message: "Erro na criação de usuário" });
  }

  res.status(201).send({
    mensagem:"Local criado com sucesso",
    usuario:{
      id:user._id,
      nome,
      slug,
      tipo,
      sobre,
      horarios,
      ingressos,
      endereco,
      foto,
      iframe
    }
  });
} catch (err) {
  res.status(500).send( {message: err.message})}
};
  
const findAll = async(req,res)  => {
  try{
    const locals = await localsSerivce.findAllService();
  
  if(locals.length === 0){
    return res.status(400).send({message: "Não há locais cadastrados"});
  }

  res.send(locals)
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

const findById = async(req,res) => {
  try{
    const locals = req.locals;

  res.send(locals);
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

const update = async(req,res) => {
  try{const {nome,slug,tipo,sobre,horarios,ingressos,endereco,foto,iframe} = req.body;

  if (!nome || !slug || !tipo || !sobre || !horarios || !ingressos || !endereco || !foto || !iframe ) {
    res.status(400).send({mensagem:"Envie pelo menos um campo para atualizar"});
  }

  const {id,locals} = req;

  await localsSerivce.updateService(
    id,
    nome,
    slug,
    tipo,
    sobre,
    horarios,
    ingressos,
    endereco,
    foto,
    iframe
  );
   
  res.send({message:"Local atualizado com sucesso"})
    
} catch (err) {
  res.status(500).send( {message: err.message})}
};

const deleteById = async(req,res) => {
  try{const id = req.id;

  await localsSerivce.deleteService(id);

  res.status(200).send({message:"Local deletado com sucesso"})
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

export default { create, findAll, findById, update, deleteById };