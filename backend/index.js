const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');

require('dotenv').config();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json())
app.use(express.static('Public'))

const users=require('./routes/UserRoutes')
const addProduct=require('./routes/AddProductRoute')
const deleteProduct=require('./routes/DeleteProductRoutes')
const getProducts=require('./routes/GetProductsRoutes')
const getAndUpdate=require('./routes/GetAndUpdate')
const sortingRoutes=require('./routes/SortingRoutes')

app.use(users)
app.use(addProduct)
app.use(deleteProduct)
app.use(getProducts)
app.use(getAndUpdate)   
app.use(sortingRoutes)


app.listen(3000, (req, res) => {
    console.log("Started server")
})
