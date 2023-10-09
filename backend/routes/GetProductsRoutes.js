

const express = require('express');
const router=express.Router();
const myconnection=require('../connection')



//get product
router.get('/getproduct', (req, res) => {
    try {
        myconnection.query('select * from allProducts', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})


//get accessories
router.get('/accessories', (req, res) => {
    try {
        myconnection.query('select * from accessories', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})

//get cosmetics
router.get('/cosmetics', (req, res) => {
    try {
        myconnection.query('select * from cosmetics', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})

//get food
router.get('/food', (req, res) => {
    try {
        myconnection.query('select * from food', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})

//get furniture
router.get('/furniture', (req, res) => {
    try {
        myconnection.query('select * from furniture', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})

//get mobile
router.get('/mobile', (req, res) => {
    try {
        myconnection.query('select * from mobile', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})


//get pet
router.get('/pet', (req, res) => {
    try {
        myconnection.query('select * from pet', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})

module.exports=router;
