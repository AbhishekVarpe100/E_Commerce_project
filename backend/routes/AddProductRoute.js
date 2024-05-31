
const express = require('express');
const router = express.Router();
const myconnection = require('../connection')
const multer = require('multer');
const path = require('path');

// Add product route

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

    const date = new Date();
    let dateString=date.toDateString();

    try {
        if (category == 'cosmetics') {

            myconnection.query('insert into cosmetics(file,category,name,description,price) values(?,?,?,?,?)', [file, category, name, description, price], (err, result) => {
                if (err) {
                    res.json("failure")
                }
                else {
                    res.json("success")
                    myconnection.query('insert into allProducts(file,category,name,description,price,createdDate) values(?,?,?,?,?,?)', [file, category, name, description, price,dateString])
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
                    myconnection.query('insert into allProducts(file,category,name,description,price,createdDate) values(?,?,?,?,?,?)', [file, category, name, description, price,dateString])
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
                    myconnection.query('insert into allProducts(file,category,name,description,price,createdDate) values(?,?,?,?,?,?)', [file, category, name, description, price,dateString])
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
                    myconnection.query('insert into allProducts(file,category,name,description,price,createdDate) values(?,?,?,?,?,?)', [file, category, name, description, price,dateString])
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
                    myconnection.query('insert into allProducts(file,category,name,description,price,createdDate) values(?,?,?,?,?,?)', [file, category, name, description, price,dateString])
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
                    myconnection.query('insert into allProducts(file,category,name,description,price,createdDate) values(?,?,?,?,?,?)', [file, category, name, description, price,dateString])
                }
            })


        }


    } catch (error) {
        console.log(error)
    }


})

//cart
router.post('/cart', (req, res) => {

    const { id, file, category, name, price } = req.body;

    try {
        myconnection.query('insert into cart(id,file,category,name,price) values(?,?,?,?,?)', [id, file, category, name, price], (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json('success')
            }
        })
    } catch (error) {
        console.log(error)
    }



})


router.post('/order', (req, res) => {
    const { name, mobile, pin, address } = req.body;
    try {
        myconnection.query('insert into place_order(name,mobile,pin,address) values(?,?,?,?)', [name, mobile, pin, address], (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json('success')
            }
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;