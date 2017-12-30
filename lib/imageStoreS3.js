const AWS = require('aws-sdk');

const s3 = new AWS.S3();

module.exports.save = (name, data, callback) => {
	let params = {
		Bucket: 'pizza-luvrs-shayane-umar',
		Key: 'pizzas/${name}.png',
		Body: new Buffer(data, 'base64'),
		ContentEncoding: 'base64',
		ContentType: 'image/png'
	};

	s3.putObject(params, (err, data) => {
		callback(err, '//s3.ap-south-1.amazonaws.com/pizza-luvrs-shayane-umar/${params.Key}')
	})
};