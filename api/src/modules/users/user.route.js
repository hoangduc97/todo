import express from 'express';
import UserService from './user.service';
import { signinValidate, signupValidate } from './user.validation';

const router = express.Router();

// routes for register or login user
router.post(
    process.env.AUTH_REGISTER_PATH,
    [...signupValidate],
    UserService.register
);
router.post(
    process.env.AUTH_LOGIN_PATH,
    [...signinValidate],
    UserService.login
);

export default router;
