const {Schema, model} = require('mongoose');

const ArticleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
})

module.exports = model('Article', ArticleSchema);