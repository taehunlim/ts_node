
require('dotenv').config();

import * as express from "express"
const app = express();

const morgan = require ('morgan');
const bodyParser = require ('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

if(process.env.NODE_ENV === 'development') {
	app.use(cors({
		origin: process.env.CLIENT_URL_TEST
	}))
	app.use(morgan('dev'))
} else {
	app.use(cors({
		origin: process.env.CLIENT_URL
	}))
}


const port = process.env.PORT
app.listen(port, () => console.log(`server running on port ${port}`))