const Document = require("../models/bookings");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { sortBy } = require("lodash");

//adding a new booking
exports.AddBooking = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
  
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({
          error: "problem with document !",
        });
      }
  
      //Destructuring the feilds
      const {
        firstname,
        lastname,
        address,
        city,
        hours,
        checkindate,
        holdersname,
        cardnumber,
        cvv,
        expdate,
      } = fields;
  
      //validating input fields
      if (
        !firstname ||
        !lastname ||
        !address ||
        !city ||
        !hours ||
        !checkindate ||
        !holdersname ||
        !cardnumber ||
        !cvv ||
        !expdate
      ) {
        return res.status(400).json({
          error: "Sorry ! Please include all fields",
        });
      }
  
      let document = new Document(fields);
  
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
  