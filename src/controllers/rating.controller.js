import ratingSerivce  from '../services/rating.serivce.js';

const create = async(req,res)  => {
  try{
    const {id,nota,comentario,tipo,Locals_id,Users_id,userId} = req.body;

  if (!nota || !comentario || !tipo || !Locals_id || !Users_id ) {
    res.status(400).send({mensagem:"Envie todos os campos para registrar uma avaliação"});
  }

  const avaliacao = await ratingSerivce.createService(req.body);

  if (!avaliacao) {
    return res.status(400).send({ message: "Erro na criação de avaliação" });
  }

  res.status(201).send({
    mensagem:"avaliação criada com sucesso"
  });
} catch (err) {
  res.status(500).send( {message: err.message})}
};
  
const findAll = async(req,res)  => {
  try{
    const avaliacao = await ratingSerivce.findAllService();
  
  if(avaliacao.length === 0){
    return res.status(400).send({message: "Não há avaliações cadastrados"});
  }

  res.send(avaliacao)
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

const findById = async(req,res) => {
  try{
    const avaliacao = req.rating;

  res.send(avaliacao);
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

const deleteById = async(req,res) => {
  try{const id = req.id;

  await ratingSerivce.deleteService(id);

  res.status(200).send({message:"Avaliação deletada com sucesso"})
} catch (err) {
  res.status(500).send( {message: err.message})
}
};

export default { create, findAll, findById, deleteById };