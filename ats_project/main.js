const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const notFound = require('./middlewares/notFound');

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));

// connect DB
connectDB();

// health
app.get('/', (req, res) => res.send('OK'));

// routes
const jdRoutes = require('./routes/jdRoutes');
const applicantRoutes = require('./routes/applicantRoutes');

app.use('/api/jds', jdRoutes);
app.use('/api/applicants', applicantRoutes);

// handle 404
app.use(notFound);

// error handler (last middleware)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
