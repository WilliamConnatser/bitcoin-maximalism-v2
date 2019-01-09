//Import Mongoose Dependency
const mongoose = require('mongoose');

//Define Model Schema
const BulletPointSchema = new mongoose.Schema({
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    },
    slug: {
        type: String,
        required: true
    },
    pro: {
        type: Boolean,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    approved: {
        type: Boolean,
        required: true,
        default: false
    },
    dateApproved: {
        type: Date
    },
    applicableDonation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Donation'
    },
    edits: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Edit',
        required: true
    },
    dateLastEdited: {
        type: Date,
        required: true,
        default: Date.now
    },
    opinions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Opinion'
    }
});

module.exports = mongoose.model('BulletPoint', BulletPointSchema);