import express from 'express';
import {authJwt} from '../../middlewares/auth.middleware';
import ListService from './list.service';
import listValidate from './list.validate';

const router = express.Router();

router.get('/', [authJwt()], ListService._getAll);
router.get('/:id', [authJwt()], ListService._getOne);
router.post('/', [authJwt(), ...listValidate], ListService._create);
router.put('/:id', [authJwt(), ...listValidate], ListService._update);
router.delete('/:id', [authJwt()], ListService._delete);

export default router;
