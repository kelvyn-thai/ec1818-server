const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const todosSchema = new Schema({
    title: {type: String, required: true},
    isCompleted: { type: Boolean}
});


module.exports = todosSchema;