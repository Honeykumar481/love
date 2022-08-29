"use strict";
const mongoose = require("mongoose");
var Candidate = mongoose.model("candidate");

const addCandidate = async (req, res) => {
  try {
    const data = {
      Id: req.body.Id,
      Name: req.body.Name,
      Birth_Date: req.body.Birth_Date,
      Gender: req.body.Gender,
      Hobbies: req.body.Hobbies,
    };
    const newUser = new Candidate(data);
    const result = await newUser.save();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send("Error", +err);
  }
};
// const fetchmale = async (req, res) => {
//   try {
//     const previousdate = "2004-08-08";
//     const data = await Candidate.find({
//       $and: [{ Gender: "Male" }, { Birth_Date: { $lte: previousdate } }],
//     });
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//     res.send("Error", +err);
//   }
// };
const fetchmale = async (req, res) => {
  try {
    var previousdate = new Date();

    previousdate.setFullYear(previousdate.getFullYear() - 18);

    console.log(previousdate);
    const data = await Candidate.find({
      $and: [{ Gender: "Male" }, { Birth_Date: { $lt: previousdate } }],
    });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Error", +err);
  }
};
const fetchhobby = async (req, res) => {
  try {
    const data = await Candidate.find({
      $or: [{ Hobbies: "cricket" }, { Hobbies: "hockey" }],
    });
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Error", +err);
  }
};
const fetchWithH = async (req, res) => {
  try {
    const data = await Candidate.aggregate([
      {
        $match: { Name: { $regex: /^H/, $options: "i" } },
      },
    ]);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send("Error", +err);
  }
};
// var fetchPercentage = async (req, res) => {
//   try {
//     var data = await Candidate.find({});
//     console.log(data);
//     var result = 0;
//     var re = 0;
//     var count = 0;
//     data.forEach(async function (item) {
//       if (item.Gender == "Male") {
//         result++;
//       } else {
//         re++;
//       }
//       count++;
//     });
//     var male = (result / count) * 100;
//     var female = (re / count) * 100;
//     console.log(result);
//     console.log(count);
//     console.log(re);

//     console.log(male);
//     res.send("male percentage" + male + "and" + "female" + female);
//   } catch (err) {
//     res.send(err);
//   }
// };
var fetchPercentage = async (req, res) => {
  try {
    const data = await Candidate.find({});
    console.log(data);
    var re = 0;
    var fe = 0;
    var count = 0;
    data.forEach(async function (item) {
      if (item.Gender == "Male") {
        re++;
      } else {
        fe++;
      }
      count++;
    });
    var male = (re / count) * 100;
    var female = (fe / count) * 100;
    res.send(`male percentage ${male} and the female ${female}`);
  } catch (err) {
    console.log(err);
  }
};

exports.addCandidate = addCandidate;
exports.fetchhobby = fetchhobby;
exports.fetchWithH = fetchWithH;
exports.fetchmale = fetchmale;
exports.fetchPercentage = fetchPercentage;
