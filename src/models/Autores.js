import mongoose from "mongoose";

const autoresSchema = mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
  },
  {
    versionKey: false,
  }
);

const autorModel = mongoose.model("autores", autoresSchema);

export default autorModel;
