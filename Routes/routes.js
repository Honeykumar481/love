"use strict";
module.exports = function (app) {
  var candidate = require("../controller/controller");
  app.route("/addcandidate").post(candidate.addCandidate);
  app.route("/fetchhobby").get(candidate.fetchhobby);
  app.route("/fetchWithH").get(candidate.fetchWithH);
  app.route("/fetchmale").get(candidate.fetchmale);
  app.route("/fetchPercentage").get(candidate.fetchPercentage);

  //   app.route("/fetchall").get(user.fetchall);
  //   app.route("/fetchone").get(user.fetchone);
  //   app.route("/fetchtwo").get(user.fetchtwo);
  //   app.route("/fetchthree").delete(user.fetchthree);
};
