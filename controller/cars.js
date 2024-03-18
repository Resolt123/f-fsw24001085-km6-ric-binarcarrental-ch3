const carstUsecase = require("../usecase/index.js");
const { v4: uuidv4 } = require("uuid");

exports.getcars = (req, res, next) => {
  // call the usecase
  const data = carstUsecase.getcars();

  const response = {
    data,
    message: null,
  };

  res.status(200).json(response);
};

exports.getdetailcar = (req, res, next) => {
  const id = req.params.id;
  const data = carstUsecase.getdetailcar(id);
  if (!data) {
    return next({
      statusCode: 404,
      message: `Student with id ${id} is not found!`,
    });
  }

  const response = {
    data: data,
    message: null,
  };

  res.status(200).json(response);
};

exports.addcar = (req, res, next) => {
  const id = uuidv4();
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;
  if (!plate || plate == "") {
    return next({
      statusCode: 404,
      message: `Plate must be filled!`,
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: `manufacture must be filled!`,
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: `model must be filled!`,
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 404,
      message: "image must be filled!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 404,
      message: "rentPerDay must be filled!",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 404,
      message: "capacity must be filled!",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "description must be filled!",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "availableAt must be filled!",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "transmission must be filled!",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "available must be filled!",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "type must be filled!",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 404,
      message: "year must be filled!",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 404,
      message: "option must be filled!",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 404,
      message: "specs must be filled!",
    });
  }
  const payload = {
    id: uuidv4(),
    ...req.body,
  };

  const data = carstUsecase.addcar(payload);

  res.status(201).json({
    data,
    message: null,
  });
};

exports.editcar = (req, res, next) => {
  const id = req.params.id;
  const {
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    availableAt,
    transmission,
    available,
    type,
    year,
    options,
    specs,
  } = req.body;
  if (!plate || plate == "") {
    return next({
      statusCode: 404,
      message: `Plate must be filled!`,
    });
  }
  if (!manufacture || manufacture == "") {
    return next({
      statusCode: 404,
      message: `manufacture must be filled!`,
    });
  }
  if (!model || model == "") {
    return next({
      statusCode: 404,
      message: `model must be filled!`,
    });
  }
  if (!image || image == "") {
    return next({
      statusCode: 404,
      message: "image must be filled!",
    });
  }
  if (!rentPerDay || rentPerDay == "") {
    return next({
      statusCode: 404,
      message: "rentPerDay must be filled!",
    });
  }
  if (!capacity || capacity == "") {
    return next({
      statusCode: 404,
      message: "capacity must be filled!",
    });
  }
  if (!description || description == "") {
    return next({
      statusCode: 404,
      message: "description must be filled!",
    });
  }
  if (!availableAt || availableAt == "") {
    return next({
      statusCode: 404,
      message: "availableAt must be filled!",
    });
  }
  if (!transmission || transmission == "") {
    return next({
      statusCode: 404,
      message: "transmission must be filled!",
    });
  }
  if (!available || available == "") {
    return next({
      statusCode: 404,
      message: "available must be filled!",
    });
  }
  if (!type || type == "") {
    return next({
      statusCode: 404,
      message: "type must be filled!",
    });
  }
  if (!year || year == "") {
    return next({
      statusCode: 404,
      message: "year must be filled!",
    });
  }
  if (!options || options == "") {
    return next({
      statusCode: 404,
      message: "option must be filled!",
    });
  }
  if (!specs || specs == "") {
    return next({
      statusCode: 404,
      message: "specs must be filled!",
    });
  }

  const data = carstUsecase.editcar(req.body, id);
  res.status(200).json({
    data: data,
    message: null,
  });
};

exports.deletecar = (req,res,next)=>{
    const id = req.params.id;

    const data = carstUsecase.deletecar(id);

    if (data == null) {
      return next({
        statusCode: 404,
        message: `car with id ${id} is not found!`,
      });
    }

    res.status(200).json({
      data: data,
      message: "Success",
    });
}
