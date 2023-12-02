const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const jobSchema = new Schema({
  dateApplied: { type: Date, required: true },
  company: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: String, required: true },
  salary: String,
  link: String,
});

const Job = mongoose.model('job', jobSchema);

module.exports = { Job };
