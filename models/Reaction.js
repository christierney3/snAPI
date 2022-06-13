const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: [280, 'Max character limit of 280 reached.']
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: String,
            default: Date.now,
        },
    }
);

module.exports = reactionSchema;