const User =  require('../models/User');

const createService = (body) => User.create(body);

const findAllService = () => User.find();

const findByIdService = (id) => User.findById(id);

const findByEmailService = (email) => User.find(email);

const updateService = (id,nome,email,senha) => User.findOneAndUpdate({_id: id},{nome,email,senha});

const deleteService = (id) => User.deleteOne({_id: id});

module.exports = {
  createService,
  findAllService,
  findByIdService,
  findByEmailService,
  updateService,
  deleteService,
};
