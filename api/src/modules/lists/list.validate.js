import {check} from 'express-validator';

const taskValidate = [
    check('title').notEmpty(),
];

export default taskValidate;
