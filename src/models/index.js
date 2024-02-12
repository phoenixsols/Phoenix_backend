import fs from "fs";
import path from "path";
import Sequelize from "sequelize";

const db = {};

const sequelized = new Sequelize(process.env.DB_NAME,process.env.DB_NAME,process.env.DB_PASSWORD,{
    dialect:"mysql",
    logging:false,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT
});

fs.readdirSync(__dirname)
.filter((file)=>file.indexOf(".")!==0 && file !=="index.js")
.forEach((file)=>{
    const model = require(path.join(__dirname,file))(
        sequelized,
        Sequelize.DataTypes
    );
    db[model.name] = model;
});

Object.keys(db).forEach((modelName)=>{
    if(db[modelName].associate)
        db[modelName].associate(db);
    if(db[modelName].seedData)
        db[modelName].seedData()
});

db.sequelize = sequelized;
db.Sequelize = Sequelize;
module.exports = db;