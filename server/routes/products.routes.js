const ProductController = require('../controllers/products.controller');

module.exports = (app) => {
    app.get('/', ProductController.showIndex);
    app.get('/api/products',ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products/:_id',ProductController.getProductById);
    app.patch('/api/products/:_id', ProductController.updateProduct);
    app.delete('/api/products/:_id', ProductController.deleteProduct);
    
}