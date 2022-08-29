"use strict";
var mongoose = require("mongoose");

//INSERT USER
var candidatesSchema = new mongoose.Schema(
  {
    Id: { type: Number, required: true },
    Name: { type: String, required: true },
    Birth_Date: {
      type: Date,
    },
    Gender: { type: String },
    Hobbies: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("candidate", candidatesSchema);
