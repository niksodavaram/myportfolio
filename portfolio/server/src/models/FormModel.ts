import mongoose, { Schema, Document } from "mongoose";

export interface IForm extends Document {
  name: string;
  email: string;
  mobile: string;
  description: string;
  deadline: Date;
}

const FormSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  description: { type: String, required: true },
  deadline: { type: Date, required: true },
});

export default mongoose.model<IForm>("Form", FormSchema);