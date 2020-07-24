const express = require('express');
const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
const AllMyProductsRoutes = require("./server/routes/product.routes");
AllMyProductsRoutes(app);
require('./server/routes/product.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})
