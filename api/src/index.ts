import mongoose from "mongoose";

import app from "./app";

const MONGODB_URL = process.env.MONGODB_URL ?? "mongodb://notify:notify@0.0.0.0:27017/notify?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

async function main() {
  await mongoose.connect(MONGODB_URL, {
    serverSelectionTimeoutMS: 1000,
  });

  app.listen(Number(process.env.PORT) || 3000, "0.0.0.0", () => {
    console.log("Server is listening on port 3000");
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(err.code || 1)
});
