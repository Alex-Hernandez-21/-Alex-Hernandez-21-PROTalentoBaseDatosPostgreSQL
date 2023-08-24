import { Sequelize } from "sequelize";

const sequelize = new  Sequelize(
    process.env.POSTGREST_URL
);


export{
    sequelize
}