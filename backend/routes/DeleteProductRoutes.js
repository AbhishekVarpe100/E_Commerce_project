
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
            myconnection.query('delete from allproducts where name=?', [name])

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
            myconnection.query('delete from allproducts where name=?', [name])

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
            myconnection.query('delete from allproducts where name=?', [name])

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
            myconnection.query('delete from allproducts where name=?', [name])

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
            myconnection.query('delete from allproducts where name=?', [name])

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
            myconnection.query('delete from allproducts where name=?', [name])

        }
    })
})



// delete all product
router.delete('/deleteall/:id',(req,res)=>{
    const id=req.params.id;
    try {
        myconnection.query('delete from allproducts where id=?',[id],(err,result)=>{
            if(err){
                console.log(err)

            }
            else{
                res.json('success')
            }
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports=router
