const Document = require("../models/accomodation.js");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const { sortBy } = require("lodash");

////////////////////////////////////////////////////////////////////
//+++++++++++++++ ACCOMODATIONS - Controllers +++++++++++++++++++++++//
////////////////////////////////////////////////////////////////////


/////////////////////////get items by id///////////////////////////
exports.getProductById = (req, res, next, id) => {
  Document.findById(id)
    .populate("category")
    .exec((err, document) => {
      if (err) {
        return res.status(400).json({
          error: "Document not found"
        });
      }
      req.document = document;
      next();
    });
};

///////////////////adding a new room type///////////////
exports.addNewRoomType = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with document !"
      });
    }

    //Destructuring the feilds
    const{ title, description, condition, rooms,price} = fields;

    //validating input fields
    if (!title || !description || !condition || !rooms || !price) {
        return res.status(400).json({
            error:"Sorry ! Please include all fields"
        });
    }

    let document = new Document(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      document.photo.data = fs.readFileSync(file.photo.path)
      document.photo.contentType = file.photo.type;
    }

    //save all data to the DB
    document.save((err, document) => {
      if (err) {
        res.status(400).json({
          error: "Saving in DB failed"
        });
      }
      res.json(document);
    });
  });
};

////////////////////////get items by id////////////////////////
exports.getProduct = (req, res) => {
    req.document.photo = undefined;
    return res.json(req.document)
};

////////////////////////middleware/////////////////////////////
exports.photo = (req, res, next) => {
    if (req.document.photo.data) {
        res.set("Content-Type", req.document.photo.contentType);
        return res.send(req.document.photo.data);
    }
    next();
};

//////////////////////delete ///////////////////////////
exports.removeProduct = (req,res) => {
    const document = req.document;
  
    document.remove((err, deletedDocument) => {
      if (err) {
        return res.status(400).json({
          error: "Failed to delete this document !"
        });
      }
      res.json({
        message: "Successfull deleted !",deletedDocument
      });
    });
};

/////////////////////update room type details////////////////////
exports.updateProduct = (req,res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image"
      });
    }
    //updation code
    let document =  req.document;
    document = _.extend(document, fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      document.photo.data = fs.readFileSync(file.photo.path)
      document.photo.contentType = file.photo.type;
    }

    //save to the DB
    document.save((err, document) => {
      if (err) {
        res.status(400).json({
          error: "Updation of room type is failed!"
        });
      }
      res.json(document);
    });
  });
};

/////////////////listing all room types controller - admin view //////////
exports.getAllRooms = (req,res) => {
    let limit = req.query.limit ? parseInt(req.query.limit) : 8 ;
    let sortBy = req.query.sortBy ? req.query.sortBy : "_id" ;

    Document.find()
    .select("-photo")
    .populate("category")
    .sort([[ sortBy, "asc"]])
    .limit(limit)
    .exec((err, documents) => {
        if (err) {
            return res.status(400).json({
                error: "NO documents found"
            });
        }
        res.json(documents);
    });
}

/////////////////listing all AC rooms controller - customer view //////////
exports.getACRooms = (req,res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8 ;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id" ;

  Document.find({"condition":"AC"})
  .select("-photo")
  .populate("category")
  .sort([[ sortBy, "asc"]])
  .limit(limit)
  .exec((err, documents) => {
      if (err) {
          return res.status(400).json({
              error: "NO documents found"
          });
      }
      res.json(documents);
  });
}

/////////////////listing all AC rooms controller - customer view //////////
exports.getnonACRooms = (req,res) => {
  let limit = req.query.limit ? parseInt(req.query.limit) : 8 ;
  let sortBy = req.query.sortBy ? req.query.sortBy : "_id" ;

  Document.find({"condition":"Non-AC"})
  .select("-photo")
  .populate("category")
  .sort([[ sortBy, "asc"]])
  .limit(limit)
  .exec((err, documents) => {
      if (err) {
          return res.status(400).json({
              error: "NO documents found"
          });
      }
      res.json(documents);
  });
}

///////////////////get all unique items///////////////////////////
exports.getAllUniqueCategories = (req, res) => {
    Document.distinct("category", {}, (err, category) => {
        if (err) {
            return res.status(400).json({
                error: "NO item found"
            });
        }
        res.json(category);
    });
}


//////////////////////////////////////////////////////////////////////////
///////////////////////////Customer Controllers///////////////////////////
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::://
////////////////////////get room////////////////////////
exports.getRoom = (req, res) => {
  req.document.photo = undefined;
  return res.json(req.document)
};


/////////////////////////get room by id///////////////////////////
exports.getRoomById = (req, res, next, id) => {
  Document.findById(id)
    .populate("category")
    .exec((err, document) => {
      if (err) {
        return res.status(400).json({
          error: "Room Type not found"
        });
      }
      req.document = document;
      next();
    });
};

///////////////////adding a new room type///////////////
exports.addBooking = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with document !"
      });
    }

    //Destructuring the feilds
    const{ title, condition, firstname, lastname,address,city,days,checkindate,norooms,holdersname,cardnumber,cvv,expdate} = fields;

    //validating input fields
    if (!title || !condition || !firstname || !lastname || !address) {
        return res.status(400).json({
            error:"Sorry ! Please include all fields"
        });
    }

    let document = new Document(fields);

    //handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!"
        });
      }
      document.photo.data = fs.readFileSync(file.photo.path)
      document.photo.contentType = file.photo.type;
    }

    //save all data to the DB
    document.save((err, document) => {
      if (err) {
        res.status(400).json({
          error: "Saving in DB failed"
        });
      }
      res.json(document);
    });
  });
};
