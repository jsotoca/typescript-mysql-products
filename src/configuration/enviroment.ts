if(process.env.NODE_ENV != 'production'){
    const dotenv = require("dotenv");
    dotenv.config();
}

const enviroment = {
    APP_NAME: <string>process.env.APP_NAME,
    PORT: <string>process.env.PORT,
    DB_HOST: <string>process.env.DB_HOST,
    DB_NAME: <string>process.env.DB_NAME,
    DB_USER: <string>process.env.DB_USER,
    DB_PASS: <string>process.env.DB_PASS,
}

export default enviroment;