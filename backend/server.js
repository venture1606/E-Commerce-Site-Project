const app = require('./app')
const dotenv = require('dotenv');

// setting up config file
dotenv.config({path: 'backend/config/config.env'});

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
    console.log(`Server is started in ${PORT} in ${process.env.NODE_ENV} mode.`)
})