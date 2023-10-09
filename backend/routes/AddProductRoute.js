
const express = require('express');
const router=express.Router();
const myconnection=require('../connection')
const multer = require('multer')
const path = require('path');


// Add product


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



router.post("/add", upload.single('file'), (req, res) => {

    const file = req.file.filename;
    const category = req.body.category;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;

    try {
        if (category == 'cosmetics') {

            myconnection.query('insert into cosmetics(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    res.json("failure")
                }
                else {
                    res.json("success")
                    myconnection.query('insert into allProducts(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price])
                }
            })
        }
        else if (category == 'food') {
            myconnection.query('insert into food(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    res.json("failure")
                }
                else {
                    res.json("success")
                    myconnection.query('insert into allProducts(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price])
                }
            })

        }
        else if (category == 'furniture') {
            myconnection.query('insert into furniture(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    res.json("failure")
                }
                else {
                    res.json("success")
                    myconnection.query('insert into allProducts(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price])
                }
            })
        }

        else if (category == 'pet') {
            myconnection.query('insert into pet(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    res.json("failure")
                }
                else {
                    res.json("success")
                    myconnection.query('insert into allProducts(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price])
                }
            })

        }

        else if (category == 'mobile') {
            myconnection.query('insert into mobile(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    res.json("failure")
                }
                else {
                    res.json("success")
                    myconnection.query('insert into allProducts(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price])
                }
            })
        }
        else if (category == 'accessories') {
            myconnection.query('insert into accessories(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.json('success')
                    myconnection.query('insert into allProducts(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price])
                }
            })


        }


    } catch (error) {
        console.log(error)
    }


})


module.exports=router;