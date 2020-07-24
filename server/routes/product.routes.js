const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    
    app.post('/api/product', ProductController.createProduct);
    app.get("/api/findAllProducts", ProductController.findAllProducts);
    // app.get("/api/edit/:_id", ProductController.singleProduct);
    app.put("/api/edit/:_id", ProductController.editOneProduct);
    app.delete("/api/:_id", ProductController.deleteSingleProduct);
    
}
