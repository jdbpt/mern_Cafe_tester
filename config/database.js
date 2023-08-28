const mongoose = require('mongoose');

let connectionString = process.env.MONGO_URI;
/*by default to has a strictQuery that is set
 to true (meaning we can't ask for info that 
 is not in our schema)*/
mongoose.set('strictQuery', false);

mongoose.connect(
    connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});



