import User from '../models/User.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const updateService = (id,slug,tipo,sobre,horarios,ingressos,endereco,foto,iframe) => User.findOneAndUpdate({_id: id},{slug,tipo,sobre,horarios,ingressos,endereco,foto,iframe});

const deleteService = (id) => User.deleteOne({_id: id});

export default {
  createService,
  findAllService,
  findByIdService,
  updateService,
  deleteService,
};