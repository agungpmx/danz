// "use-strict";

const axios = require('axios');
const CircularJSON = require('circular-json');
// const fetch = require('node-fetch');

const listJob = async (req) => {
	try {
		// const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
    // const page = req.query.page ? parseInt(req.query.page) : 0;
		let data = await axios.get('http://dev3.dansmultipro.co.id/api/recruitment/positions.json');
		return data;
	} catch (err) {
		console.log(err);
		return err;
	}
};

const detailJob = async (req, id) => {
  // http://dev3.dansmultipro.co.id/api/recruitment/positions/{ID}
  console.log(id)
	let data = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`);

	console.log(data)
 	return data;
};

module.exports = { listJob, detailJob };
