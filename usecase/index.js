const carsRepo = require("../repository/cars/index.js");

exports.getcars = () => {
  const data = carsRepo.getCars();
  return data;
};

exports.getdetailcar = (id) => {
  const data = carsRepo.getdetailcar(id);
  return data;
};

exports.addcar = (payload) =>{
  const data = carsRepo.addcar(payload);
  return data;
};

exports.editcar = (payload,id) =>{
  const data = carsRepo.editcar(payload,id);
  return data;
};

exports.deletecar = (id) =>{
  const data = carsRepo.deletecar(id);
  return data;
};