const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    
    
    title: {
        type: String,
    },
       ingredients: {
        type: String,
    },
    instructions: {
        type: String,
    },
    image: {
        type: String,

    },
    createdBy: {
        type: String,
        ref: "User"
    },
    updatedBy: {
        type: String
    }

    
}, {timestamps: true});


module.exports = mongoose.model('Recipe', recipeSchema);