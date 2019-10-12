const {
    Schema,
    model
} = require('mongoose');

const ClientSchema = new Schema({
    name: String,
    picture: String
}, {
    timestamps: true
});

module.exports = model('Client', ClientSchema);