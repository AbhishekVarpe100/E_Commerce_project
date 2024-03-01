
const express = require('express');
const router=express.Router();

const myconnection=require('../connection')

// create user
router.post('/create', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        myconnection.query('insert into register(name,email,password) values(?,?,?)', [name, email, password], (err, result) => {
            if (err) {
                res.json("failure")
            }
            else {
                res.json("success")
            }
        })
    }
    catch (err) {
        console.log(err)
    }
})


//authorize user
router.post('/login', async (req, res) => {
    console.log(req.body)
    try {
        
        const { name, password } = req.body;
        myconnection.query('select * from register where name=? and password=?', [name, password], (err, result) => {
            if (err) {
                res.json('fail')
            }
            else if (result.length > 0) {
                if (name === 'admin') {
                    res.json('adminPanel')
                }
                else {
                    res.json("success")
                }
            }
            else {
                res.json('fail')

            }
        })
    }
    catch (err) {
        console.log(err)
    }

})


//get all users data
router.get('/getdata', async (req, res) => {

    try {
        myconnection.query('select * from register', (err, results) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(results)
                res.json(results)
            }
        })

    } catch (error) {
        console.log(error)
    }

})


//delete user
router.delete('/delete/:id', (req, res) => {
    // const {id}=req.params;
    //or
    const id = req.params.id;
    try {
        myconnection.query("delete from register where id=?", [id], (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.json("success")
            }
        })

    } catch (error) {
        console.log(error);
    }
})

module.exports=router;
