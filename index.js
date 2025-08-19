require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT} (env: ${process.env.NODE_ENV || 'production'})`);
});
