import User from '../models/Rating.js';

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const deleteService = (id) => User.deleteOne({_id: id});

export default {
  createService,
  findAllService,
  findByIdService,
  deleteService,
};