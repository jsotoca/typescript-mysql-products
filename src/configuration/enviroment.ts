if(process.env.NODE_ENV != 'production'){
    const dotenv = require("dotenv");
    dotenv.config();
}

const enviroment = {
    APP_NAME: <string>process.env.APP_NAME,
    PORT: <string>process.env.PORT,
}

export default enviroment;