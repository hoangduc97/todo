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
    const account = this;

    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (error, salt) {
            if (error) {
                return next(error);
            }
            bcrypt.hash(account.password, salt, function (error, hash) {
                if (error) {
                    return next(error);
                }
                account.password = hash;
            });
        });
    }
    next();
});

User.methods.comparePassword = function (pw, cd) {
    bcrypt.compare(pw, this.password, (error, isMatch) => {
        if (error) return cd(error);
        cd(null, isMatch);
    });
};

export default mongoose.model('User', User);
