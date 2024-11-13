const {Schema, model} = require('mongoose');
const userData = require('./user-model');

const ArticleSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    image: {type: String},
    date: {type: Date, default: Date.now}
})

module.exports = model('Article', ArticleSchema);