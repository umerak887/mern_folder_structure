import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sales_management", "postgres", "admin", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
});

export const connectDb = async () => {
  try {
    sequelize.authenticate();
    console.log("Database Connected");
  } catch (error) {
    console.log("Something went wrong with DB");
  }
};

export default sequelize;
