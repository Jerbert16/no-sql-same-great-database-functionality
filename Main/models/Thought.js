const {  Mongoose, Schema, Types, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    type: Number //Schema.Types.ObjectId,
    // default: new Mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  reactionBody: {
    type: String,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

thoughtSchema.virtual('dateFormat').get(function () {
    return Intl.DateTimeFormat('en-US').format();
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
