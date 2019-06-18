const express = require('express')
const router = express.Router();
const db = require('../models')

//user page rending
router.get('/',(req,res) =>{
    db.Users.find()
    .then((data) => res.render('usersList',{data:data}))
    .catch((err) => res.send(err))
});

//add User call
router.get('/add',(req,res) => {
    res.render('addUsers');
});

//added users
router.post('/',(req,res) => {
    db.Users.create(req.body)
    .then(res.redirect('/users'))
    .catch((err) => res.send(err))
});

//more details about user
router.get('/showUser/:id',(req,res) =>{
    db.Users.findById(req.params.id)
    .then((data) => {
    
        res.render('showUser',{data:data})
    })
    .catch((err) => res.send(err))
});

//delete the users
router.delete('/delete/:id',(req,res) =>{
    db.Users.remove({_id:req.params.id})
    .then(res.redirect('/users/'))
    .catch((err) => res.send(err))
});

//updating User 
router.put('/edit/:id',(req,res) => {
    db.Users.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((data) => res.redirect('/users/'))
    .catch((err) => res.send(err))
});

//routing to the edit page
router.get('/edit/:id',(req,res) => {
    db.Users.findById(req.params.id)
    .then((data) => {
    
        res.render('editUser',{data:data})
    })
    .catch((err) => res.send(err))
});

module.exports = router;