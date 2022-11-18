const Recipe = require('../models/recipeModel');
const checkUser = require('../middleware/checkUser');

const index = (req, res, next) => {
    Recipe.find()
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents.'})
        })
}
const show = (req, res, next) => {
    const id = req.params.id
    Recipe.findById(id)
        .then(recipe => {
            res.status(200).json(recipe)
        }
    )
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the document.'})
        }
    )
}
const store = (req, res, next) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        image: req.body.image,
        createdBy: res.locals.user.username
    })
    if (req.file) {
        recipe.image = req.file.path
    }
    recipe.save()
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({err: 'Could not create a new document.'})
        })
}


const update = (req, res, next) => {
    let recipeId = req.body._id

    const updateData = {
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        image: req.body.image,
        updatedBy: res.locals.user.username
    }

    if (recipeId) {
    Recipe.findByIdAndUpdate(recipeId, { $set: updateData })
                .then(() => {
                res.status(200).json({ message: 'Document updated.' })
            })
            .catch(() => {
                res.status(500).json({error: 'Could not update the document.'})
            })
    }
    else {
                res.status(404).json({ message: 'Document not found - ID is missing!' })
            }
}

const erase = (req, res, next) => {
    const id = req.params.id
    Recipe.findByIdAndDelete(id)
        .then(() => {
            res.status(200).json('Document deleted.')
        })
        .catch(() => {
            res.status(500).json({error: 'Could not delete the document.'})
        })
}

module.exports = {index, show, store, update, erase}