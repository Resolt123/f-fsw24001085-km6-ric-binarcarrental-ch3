const cars = require("../../data/cars.json");

exports.getCars = () => {
  let data = cars.map((cars) => cars);
  return data;
};

exports.getdetailcar = (id) => {
  let data = cars.map((car) => car);

  data = data.filter((car) => car.id == id);
  if (data.length == 0) {
    return null;
  }

  return data[0];
};

exports.addcar = (payload) => {
  /* Process insert data */
  // Insert to data student
  cars.push(payload);

  return payload;
};

exports.editcar = (payload,id) => {
  const updatedCar = {
    id: id,
    ...payload,
  };

  // Update the data by id
  cars.map((car, index) => {
    if (car?.id == id) {
      cars[index] = updatedCar;
    }
  });
  return updatedCar;
};

exports.deletecar = (id) => {
  index = cars.findIndex((car) => car.id === id);
  if (index == -1) {
    return null;
  }
  cars.splice(index, 1);
  return cars;
};
