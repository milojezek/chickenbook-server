import { Schema, model } from "mongoose";

const memberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  // skills: {
  //   type: Array,
  //   required: true
  // },
  // projects: {
  //   type: Array,
  //   required: true
  // },
  // email: {
  //   type: String,
  //   required: true
  // },
  // phone: {
  //   type: String,
  //   required: true
  // },
  // gitHub: {
  //   type: String,
  //   required: true
  // },
  // linkedIn: {
  //   type: String,
  //   required: true
  // },
  // updateAt: {
  //   type: Date,
  //   required: true
  // }
});

const memberModel = model("member", memberSchema);

export default memberModel;