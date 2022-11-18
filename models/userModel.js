const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 3

    },
    password: {
        type: String,
        required: true,
        minlength: 3
    }
}, { timestamps: true, collection: 'users' });


userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function (username, password) {
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
            
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect username');
    
};


const User = mongoose.model('User', userSchema);
module.exports = User;