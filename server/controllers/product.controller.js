const { Product } = require('../models/product.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProduct = (request, response) => {
    const { Title, Price, Description } = request.body;
    Product.create({
        Title,
        Price,
        Description
    })
        .then(product => response.json(product))
        
        .catch(err => response.json(err));
        
}
module.exports.findAllProducts = (req, res) => {
    Product.find()
      .then(product => res.json(product))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };


module.exports.getOneProduct = (req, res) =>{
    Product.findOne({_id: req.params._id})
    .then(product => res.json(product))
    .catch(err => res.json({ message: "no, not again", error: err }));

}


module.exports.editOneProduct = (req, res) =>{
    Product.findByIdAndUpdate({_id: req.params._id}, req.body)
    .then(product => res.json(product))
    .catch(err => res.json({ message: "no, not again", error: err }));

}


module.exports.deleteSingleProduct = (req, res) =>{
    Product.findByIdAndRemove({_id: req.params._id})
    .then(() => res.json({msg:"goodbye"}))
    .catch(err => res.json({ message: "no, not again", error: err }));

}