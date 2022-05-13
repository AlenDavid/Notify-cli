import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface Token {
  token: string;
  devices: Device[];
}

const Tokens = new Schema<Token>({
  token: String,
  devices: [
    {
      type: Object,
    },
  ],
});

export default mongoose.model("Tokens", Tokens);
