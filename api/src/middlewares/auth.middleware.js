import passport from '../config/passport.config';

const authJwt = () => {
    return (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err, user) => {
            if (err || !user)
                return res.status(403).json({ message: 'forbidden' });
            else {
                next();
            }
        })(req, res, next);
    };
};

export { authJwt };
