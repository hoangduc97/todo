import {check} from 'express-validator';

const taskValidate = [
    check('title').notEmpty(),
    check('completed').notEmpty(),
];


export {taskValidate};
