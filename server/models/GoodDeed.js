const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const GoodDeed = model('GoodDeed', goodDeedSchema);

module.exports = GoodDeed;