const { Schema, model } = require('mongoose');

const goodDeedSchema = new Schema({
    goodDeedText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true
    },
    goodDeedAuthor: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const GoodDeed = model('GoodDeed', goodDeedSchema);

module.exports = GoodDeed;