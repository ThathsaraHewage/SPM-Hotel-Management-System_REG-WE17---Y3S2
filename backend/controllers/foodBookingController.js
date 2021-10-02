const DocumentOrder = require("../models/foodOrder.js");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { sortBy } = require("lodash");

// order food

exports.orderFoodItem = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with document !",
      });
    }

    //Destructuring the feilds
    const { name, description, category, discount, price } = fields;

    //validating input fields
    if (!name || !description || !category || !discount || !price) {
      return res.status(400).json({
        error: "Sorry ! Please include all fields",
      });
    }

    let document = new DocumentOrder(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      document.photo.data = fs.readFileSync(file.photo.path);
      document.photo.contentType = file.photo.type;
    }

    //save all data to the DB
    document.save((err, document) => {
      if (err) {
        res.status(400).json({
          error: "Saving in DB failed",
        });
      }
      res.json(document);
    });
  });
};
