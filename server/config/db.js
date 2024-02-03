import mongoose from "mongoose";
import { connect } from "mongoose";

mongoose.set("strictQuery", false);

const connectDatabase = async () => {
  try {
    const dbConnection = await connect(process.env.DATABASE_URI);
    console.log("successfully connected to database" + dbConnection.connection.host)
  } catch (e) {
    console.log("error", e)
  }
}

export default connectDatabase;