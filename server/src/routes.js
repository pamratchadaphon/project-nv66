const PhoneController = require("./controllers/PhoneController");

module.exports = (app) => {
  app.post("/phone", PhoneController.create);
  app.put("/phone/:phoneId", PhoneController.put);
  app.delete("/phone/:phoneId", PhoneController.remove);
  app.get("/phone/:phoneId", PhoneController.show);
  app.get("/phones", PhoneController.index);
};
