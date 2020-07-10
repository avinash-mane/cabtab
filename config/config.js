const mongoose = require('mongoose');
const userName = process.env.DB_USER_NAME;
const password = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const port = process.env.DB_PORT;
const url = `mongodb://${userName}:${password}@${dbHost}:${port}/${dbName}`

mongoose.Promise = global.Promise;
exports.mongoConnection = () => {
mongoose.connect(url, {
    useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
}
