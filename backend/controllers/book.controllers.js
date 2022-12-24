
const Book =require('../models/book.models.js')
const router=require("express").Router() ;
const body=require("body-parser") ;
exports.creer= async (req, res) => { 
    try {
         var book= Book(req.body);
         
            var result=await book.save(); 
            res.send(result);
        } catch (error) {
            res.status(500).send(error);
            }
};


exports.afficherTout = async(req, res) => {
    try{
        var result = await Book.find();
        console.log("dddddd",Book);
        res.send(result);
    }
    catch(error) {
        res.status(500).send(error);
    }
};
exports.afficherUn= async (req, res) => {
    try {
        var n=await Book.findById(req.params.booktId).exec();
        var result = await n.save();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};
exports.modifier = async(req, res) => {
        try 
        {
        var n =  await Book.findById({ _id: req.params.booktId});
            n.BNom = req.body.BNom || "Updated nom" ; 
            n.BDate=req.body.BDate || "updated Date" ;
            n.BPays=req.body.BPays || "Updated pays";
            n.Bauteur=req.body.Bauteur || "Updated auteur";
            n.Blangue=req.body.Blangue || "Updated langue";
            n.Bprix=req.body.Bprix || "Updated prix";

             var result = await n.save();
            res.send(result);
             }
        catch (error){
                res.status(400).send("unable to update the database");
          }
};
exports.supprimer= async (req, res) => {
    try {
        var result=await Book.deleteOne({_id: req.params.booktId}).exec();
        res.send(result);
    } catch (error) {
    res.status(500).send(error);
    }
};

