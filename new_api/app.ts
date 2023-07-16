import express from 'express';
import autherization from '../new_api/src/routes/auth';
import { login, signup } from './src/controller/authcontroller';

const app = express();

app.use(express.json());
// app.use('/api/auth',autherization)

app.post('/signup', signup);
app.post('/login', login);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

