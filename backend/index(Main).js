
// alternate file

const express = require('express');
const app = express();
const axios = require('axios')
const cors = require('cors')
const mysql2 = require('mysql')
const bodyParser = require('body-parser');
const multer = require('multer')
const path = require('path');
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

app.use(express.static('public'))

const myconnection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: '',
    database: 'abhishek'
});

myconnection.connect((err) => {
    if (err) {
        console.log("Error in server")
    }
    else {
        console.log("Connected successfully");
    }
})


// create user
app.post('/create', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        myconnection.query('insert into demo2(name,email,password) values(?,?,?)', [name, email, password], (err, result) => {
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
app.post('/login', async (req, res) => {
    try {
        const { name, password } = req.body;
        myconnection.query('select * from demo2 where name=? and password=?', [name, password], (err, result) => {
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
app.get('/getdata', async (req, res) => {

    try {
        myconnection.query('select * from demo2', (err, results) => {
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
app.delete('/delete/:id', (req, res) => {
    // const {id}=req.params;
    //or
    const id = req.params.id;
    try {
        myconnection.query("delete from demo2 where id=?", [id], (err, result) => {
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



app.post("/add", upload.single('file'), (req, res) => {

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



//get product
app.get('/getproduct', (req, res) => {
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
app.get('/accessories', (req, res) => {
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
app.get('/cosmetics', (req, res) => {
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
app.get('/food', (req, res) => {
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
app.get('/furniture', (req, res) => {
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
app.get('/mobile', (req, res) => {
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
app.get('/pet', (req, res) => {
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


//delete accessories

app.delete('/deleteaccessories/:name', (req, res) => {
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
app.delete('/deletecosmetics/:name', (req, res) => {
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
app.delete('/deletefood/:name', (req, res) => {
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
app.delete('/deletefurniture/:name', (req, res) => {
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
app.delete('/deletepet/:name', (req, res) => {
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
app.delete('/deletemobile/:name', (req, res) => {
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
app.delete('/deleteall/:id', (req, res) => {
    const id = req.params.id;
    try {
        myconnection.query('delete from allproducts where id=?', [id], (err, result) => {
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



// get accessories data by id to update it
app.get('/accessories/:id', (req, res) => {
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
app.post('/updateaccessories/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update accessories set name=?, description=?, price=?,file=? where id=?', [name, description, price, file, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json('success')

            }

        })

    } catch (error) {

    }
    // console.log(id, name, description, price, file)
})


// get cosmetics data by id to update it
app.get('/cosmetics/:id', (req, res) => {
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
app.post('/updatecosmetics/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update cosmetics set name=?, description=?, price=?,file=? where id=?', [name, description, price, file, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json('success')

            }

        })

    } catch (error) {

    }
})



// get food data by id to update it
app.get('/food/:id', (req, res) => {
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
app.post('/updatefood/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update food set name=?, description=?, price=?,file=? where id=?', [name, description, price, file, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json('success')

            }

        })

    } catch (error) {

    }
})


// get furniture data by id to update it
app.get('/furniture/:id', (req, res) => {
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
app.post('/updatefurniture/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update furniture set name=?, description=?, price=?,file=? where id=?', [name, description, price, file, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json('success')

            }

        })

    } catch (error) {

    }
})


// get pet data by id to update it
app.get('/pet/:id', (req, res) => {
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
app.post('/updatepet/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update pet set name=?, description=?, price=?,file=? where id=?', [name, description, price, file, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json('success')

            }

        })

    } catch (error) {

    }
})

// get mobile data by id to update it
app.get('/mobile/:id', (req, res) => {
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
app.post('/updatemobile/:id', upload.single('file'), (req, res) => {
    const id = req.params.id;
    const file = req.file.filename;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    try {

        myconnection.query('update mobile set name=?, description=?, price=?,file=? where id=?', [name, description, price, file, id], (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json('success')

            }

        })

    } catch (error) {

    }
})





app.listen(3000, (req, res) => {
    console.log("Started server")
})
