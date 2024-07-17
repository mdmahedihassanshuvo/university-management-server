/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import app from "./app";
import config from "./app/config";
import { Server } from "http";

let server: Server;

async function main() {
  await mongoose.connect(config.baseUrl as string);

  server = app.listen(config.port, () => {
    console.log(`Application listening on port ${config.port}`);
  });
}

main();

process.on("unhandledRejection", () => {
  console.log("🤬 unhandledRejection exception, shutting down the server");
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", () => {
  console.log("🤬 Uncaught exception, shutting down the server");
  process.exit(1);
});