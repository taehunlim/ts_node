const mongoose = require('mongoose');

const db = process.env.MONGO_DB;
const options = { 
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose
	.connect(db, options)
	.then(() => console.log("mongoDB connected"))
	.catch(err => {
		console.log(err)
	})

mongoose.Promise = global.Promise;