const express = require('express')
const router = express.Router()
const upload = require("../multer")
const passport = require("../config/passport")


const {
    addCocktail,
    getAllCocktails,
    getCocktailById,
    updateCocktail,
    deleteCocktail
} = require('../controllers/cocktailcontroller')



router.post('/add/cocktails', passport.authenticate("jwt", { session: false }),upload.single("image"), addCocktail)
router.get('/get/cocktails',passport.authenticate("jwt", { session: false }),getAllCocktails)
router.get('/get/cocktails/:id',passport.authenticate("jwt", { session: false }),getCocktailById)
router.put('/update/cocktails/:id',passport.authenticate("jwt", { session: false }),updateCocktail)
router.delete('/delete/cocktails/:id',passport.authenticate("jwt", { session: false }),deleteCocktail)


module.exports = router