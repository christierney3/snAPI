const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
// Schema for Thought model

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: [280, 'Max character limit of 280 reached.']
        },
        createdAt: {
            type: String,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
    }
);

thoughtSchema
  .virtual('getReactions')
  .get(function () {
    return this.reactions.length;
  });

const Thought = model('thought', thoughtSchema);
module.exports = Thought;