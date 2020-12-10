import passport from '../config/passport.config';

const authJwt = () => {
    return (req, res, next) => {
        passport.authenticate('jwt', { session: false }, (err) => {
            if (err)
                return res.status(403).json({ message: 'forbidden' });
            else {
                next();
            }
        })(req, res, next);
    };
};

export { authJwt };
