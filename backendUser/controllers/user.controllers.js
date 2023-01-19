
const User =require('../models/user.models.js')
const router=require("express").Router() ;
const body=require("body-parser") ;
exports.creer= async (req, res) => { 
    try {
         var user= User(req.body);
         
            var result=await user.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await User.find();
        console.log("dddddd",User);
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await User.findById(req.params.usertId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await User.findById({ _id: req.params.userId});
            n.UNom = req.body.UNom || "Updated nom" ; 
            n.Uprenom=req.body.Uprenom || "updated prenom" ;
            n.Uemail=req.body.Uemail || "Updated Uemail";
            n.Umdp=req.body.Umdp || "Updated mdp";
            


             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await User.deleteOne({_id: req.params.userId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};

