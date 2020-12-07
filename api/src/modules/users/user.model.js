import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
});

User.pre('save', function (next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function(error, salt) {
            if (error) {
                return next(error);
            }
            bcrypt.hash(user.password, salt, function(error, hash) {
                if (error) return next(error);
                user.password = hash;
                next();
            });    
        });
    } else {
        next();
    }
});

User.methods.comparePassword = function (pw, cd) {
    bcrypt.compare(pw, this.password, function(error, isMatch) {
        if (error) return cd(error);
        cd(null, isMatch);
    });
};

export default mongoose.model('User', User);
