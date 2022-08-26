import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://alura:123@cluster0.3po95.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;

//45.170.16.130
