import mongoose from 'mongoose';
import 'dotenv/config';

//connect to MongoDB database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

//Job Schema for MongoDB
const jobSchema = new Schema({
  dateApplied: { type: Date, required: true },
  company: { type: String, required: true },
  title: { type: String, required: true },
  status: { type: String, required: true },
  salary: String,
  link: String,
});

const Job = mongoose.model('job', jobSchema);

export { Job };
