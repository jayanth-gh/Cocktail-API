const Cocktail = require('../models/cocktail')


const addCocktail = async (req,res)=>{
    try{
         

        const cocktail = await Cocktail.create({
            name: req.body.name,
            ingredients: req.body.ingredients.split(','),
            instructions: req.body.instructions,
            category: req.body.category,
            image: req.file.path
        })
        res.status(201).json({
            message: "Cocktail added",cocktail
        })

    }
    catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getAllCocktails = async (req,res)=>{
    try{
        const cocktails = await Cocktail.find()
        res.status(200).json({
            message: "Cocktails fetched",cocktails   })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const getCocktailById = async (req,res)=>{
    try{
        const cocktail = await Cocktail.findById(req.params.id)
        res.status(200).json({
            message: "Product fetched",cocktail
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const updateCocktail = async (req,res)=>{
    try{
        const cocktail = await Cocktail.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({
            message: "Cocktails updated",cocktail
        })
        
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

const deleteCocktail = async (req,res)=>{
    try{
        await Cocktail.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Cocktail deleted"
        })
    } catch(err){
        res.status(500).json({
            message:err
        })
    }
}

module.exports = {
    addCocktail,
    getAllCocktails,
    getCocktailById,
    updateCocktail,
    deleteCocktail
}
