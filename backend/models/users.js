import mongoose, { Schema } from "mongoose";
import "dotenv/config";

async function main() {
  const conn = process.env.mongoose_url + process.env.mongodb_name;
  // console.log(conn);
  await mongoose.connect(conn);
  console.log("monggodb connected");
}

main().catch((err) => console.log(err));

const userSchema = new Schema({
  email: String,
  password: String,
});

const userModel = mongoose.model("User", userSchema);

export { userModel };
