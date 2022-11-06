"use-strict";

const jobController = async (req, res) => {
  // pagination
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  // get data
  let response = await req.services.jobService.listJob(req);
  let data = response.data.slice((page - 1) * pageSize, page * pageSize);

  let objectResponse = await {
    error: false,
    message: "Found",
    data: data,
  };

  return req.output(req, res, objectResponse, "info", 200);
};

const alljobController = async (req, res) => {
  // get data
  let response = await req.services.jobService.listJob(req);
  let objectResponse = await {
    error: false,
    message: "Found",
    data: response.data,
  };

  return req.output(req, res, objectResponse, "info", 200);
};

// const filters = req.query;
// const filteredUsers = data.filter(user => {
//   let isValid = true;
//   for (key in filters) {
//     console.log(key, user[key], filters[key]);
//     isValid = isValid && user[key] == filters[key];
//   }
//   return isValid;
// });
// res.send(filteredUsers);

const jobSearchController = async (req, res) => {
  const filters = req.query;

  // get data
  let response = await req.services.jobService.listJob(req);
  let data = response.data;

  const filteredData = data.filter(dataFil => {
    let isValid = true;
    for (key in filters) {
      // console.log(key, user[key], filters[key]);
      // isValid = isValid && user[key] == filters[key];

      console.log(key, dataFil[key], filters[key]);
      isValid = isValid && dataFil[key] == filters[key];
    }
    return isValid;
  })


  let objectResponse = await {
    error: false,
    message: "Found",
    data: filteredData,
  };

  return req.output(req, res, objectResponse, "info", 200);
};


const jobDetailController = async (req, res) => {
  let data = await req.services.userService.detail(req, req.params.id);

  let objectResponse = await {
    error: false,
    message: "Found",
    data: data,
  };

  return req.output(req, res, objectResponse, "info", 200);
};

module.exports = {
  jobController,
  jobDetailController,
  jobSearchController,
  alljobController
};
