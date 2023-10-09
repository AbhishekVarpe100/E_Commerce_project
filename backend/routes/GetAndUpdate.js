

const express = require('express');
const router=express.Router();
const myconnection=require('../connection')
const multer = require('multer')
const path = require('path');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Public/Images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})




// get accessories data by id to update it
router.get('/accessories/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('select * from accessories where id =?', [id], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results[0])
            }
        })

    } catch (error) {
        console.log(error)
    }

})

// update accessories product
router.post('/updateaccessories/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update accessories set name=?, description=?, price=?,file=? where id=?',[name,description,price,file,id],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json('success')
                
            }

        })

    } catch (error) {

    }
    // console.log(id, name, description, price, file)
})


// get cosmetics data by id to update it
router.get('/cosmetics/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('select * from cosmetics where id =?', [id], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results[0])
            }
        })

    } catch (error) {
        console.log(error)
    }

})


// update cosmetics product
router.post('/updatecosmetics/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update cosmetics set name=?, description=?, price=?,file=? where id=?',[name,description,price,file,id],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json('success')
                
            }

        })

    } catch (error) {

    }
})



// get food data by id to update it
router.get('/food/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('select * from food where id =?', [id], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results[0])
            }
        })

    } catch (error) {
        console.log(error)
    }

})



// update food product
router.post('/updatefood/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update food set name=?, description=?, price=?,file=? where id=?',[name,description,price,file,id],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json('success')
                
            }

        })

    } catch (error) {

    }
})


// get furniture data by id to update it
router.get('/furniture/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('select * from furniture where id =?', [id], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results[0])
            }
        })
    } catch (error) {
        console.log(error)
    }

})


// update furniture product
router.post('/updatefurniture/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update furniture set name=?, description=?, price=?,file=? where id=?',[name,description,price,file,id],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json('success')
                
            }

        })

    } catch (error) {

    }
})


// get pet data by id to update it
router.get('/pet/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('select * from pet where id =?', [id], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results[0])
            }
        })
    } catch (error) {
        console.log(error)
    }

})

// update pet product
router.post('/updatepet/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update pet set name=?, description=?, price=?,file=? where id=?',[name,description,price,file,id],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json('success')
                
            }

        })

    } catch (error) {

    }
})

// get mobile data by id to update it
router.get('/mobile/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('select * from mobile where id =?', [id], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results[0])
            }
        })
    } catch (error) {
        console.log(error)
    }
})


// update pet product
router.post('/updatemobile/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update mobile set name=?, description=?, price=?,file=? where id=?',[name,description,price,file,id],(err,result)=>{
            if(err){
                console.log(err);
            }
            else{
                res.json('success')
                
            }

        })

    } catch (error) {

    }
})

module.exports=router;
