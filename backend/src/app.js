const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const chamadoRoutes = require('./routes/chamados');
const authRoutes = require('./routes/auth');
const serverTimeRoutes = require('./routes/serverTime');

const app = express();
const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('Database connected and models synchronized');
});

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(bodyParser.json());
app.use('/api/chamados', chamadoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', serverTimeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
