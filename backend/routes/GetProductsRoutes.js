

const express = require('express');
const router = express.Router();
const myconnection = require('../connection')



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


//get cart data
router.get('/cart', (req, res) => {
    try {
        myconnection.query('select * from cart', (err, results) => {
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


//get cart count
router.get('/cartcount', async (req, res) => {
    try {

        myconnection.query('select count(*) as cart_count  from cart', (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                const cartCount = results[0].cart_count;

                res.json({ cartCount });
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})


//get cart amount count total
router.get('/amountcount', async (req, res) => {
    try {

        myconnection.query('select sum(price) as amount_count  from cart', (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                const amtcount = results[0].amount_count;

                res.json({ amtcount });
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})


//get customer orders
router.get('/getorders', (req, res) => {
    try {
        myconnection.query('select * from place_order', (err, results) => {
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


//get orders count
router.get('/ordercount', async (req, res) => {
    try {

        myconnection.query('select count(*) as order_count  from place_order', (err, results) => {
            if (err) {
                console.log(err);
            }
            else {
                const orderCount = results[0].order_count;

                res.json({ orderCount });
            }
        })

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }

})


module.exports = router;
