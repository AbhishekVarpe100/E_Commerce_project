
const express = require('express');
const router=express.Router();
const myconnection=require('../connection')




//delete accessories

router.delete('/deleteaccessories/:name', (req, res) => {
    const name = req.params.name;
    myconnection.query('delete from accessories where name=?', [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json('success')
            
        }
    })
})

//delete cosmetics
router.delete('/deletecosmetics/:name', (req, res) => {
    const name = req.params.name;
    myconnection.query('delete from cosmetics where name=?', [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json('success')
            

        }
    })
})


//delete food
router.delete('/deletefood/:name', (req, res) => {
    const name = req.params.name;
    myconnection.query('delete from food where name=?', [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json('success')
            

        }
    })
})

//delete food
router.delete('/deletefurniture/:name', (req, res) => {
    const name = req.params.name;
    myconnection.query('delete from furniture where name=?', [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json('success')
            

        }
    })
})

//delete pet
router.delete('/deletepet/:name', (req, res) => {
    const name = req.params.name;
    myconnection.query('delete from pet where name=?', [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json('success')
            

        }
    })
})

//delete mobile
router.delete('/deletemobile/:name', (req, res) => {
    const name = req.params.name;
    myconnection.query('delete from mobile where name=?', [name], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.json('success')
            

        }
    })
})

//delete all products
router.delete('/deleteall/:id',(req,res)=>{
    const id=req.params.id;
    myconnection.query('delete from allproducts where id=?',[id],(err,results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json('success')
        }
    })
})

//delete cart products
router.post('/deletecart',(req,res)=>{
    const {id,category}=req.body;
    myconnection.query('delete from cart where id=? and category=?',[id,category],(err,results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json('success');
        }
    })
})

//delete orders 
router.delete('/rejectorder/:id',(req,res)=>{
    const id=req.params.id;
    myconnection.query('delete from place_order where id=?',[id],(err,results)=>{
        if(err){
            console.log(err)
        }
        else{
            res.json('reject');
        }
    })
    
})


module.exports=router
