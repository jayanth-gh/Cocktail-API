const mongoose = require("mongoose")

const cocktailSchema = new mongoose.Schema(
    {
        name: {
            type:String
        },
        ingredients: {
            type : [String]
        },
        instructions: {
            type : String
        },
        category: {
            type: String
        },
        image: {
            type: String
        }
    }
)

module.exports = mongoose.model("Cocktail",cocktailSchema)