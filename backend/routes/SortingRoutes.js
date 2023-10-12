const express = require('express');
const router = express.Router();
const myconnection = require('../connection')


//sort by price
router.get('/sortbyprice',(req,res)=>{
    try {
        myconnection.query('select * from allProducts order by price',(err,results)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
})
//sort by category
router.get('/sortbycategory',(req,res)=>{
    try {
        myconnection.query('select * from allProducts order by category',(err,results)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
})
//sort by name
router.get('/sortbyname',(req,res)=>{
    try {
        myconnection.query('select * from allProducts order by name',(err,results)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(results)
            }
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports=router;