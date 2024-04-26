const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const ProductModel = require("./models/Products")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/user")

app.get('/', (req, res) => {
    ProductModel.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.get('/getProduct/:id', (req, res) => {
    const id  = req.params.id;
    ProductModel.findById({_id:id})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.put('/updateProduct/:id', (req, res) => {
    const id  = req.params.id;
    ProductModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name, 
        category: req.body.category,
        color: req.body.color,
        price: req.body.price,
        comments: req.body.comments})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.delete('/deleteProduct/:id', (req, res) => {
    const id  = req.params.id;
    ProductModel.findByIdAndDelete({_id: id}) 
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

app.post("/createProduct", (req, res) => {
    ProductModel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.listen(3003, () => {
    console.log("Server is running")
})