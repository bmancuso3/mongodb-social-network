const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'],
        },
        thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought",
        },
        ],
        friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        ],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

// virtual to retrieve friend count
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// creating model
const User = model('user', userSchema);

module.exports = User;