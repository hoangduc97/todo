import express from 'express';
import { authJwt } from '../../middlewares/auth.middleware';
import TaskService from './task.service';
import taskValidate from './task.validate';
const router = express.Router();

router.get('/:list_id', [authJwt()], TaskService._get);
router.post('/:list_id', [authJwt(), ...taskValidate], TaskService._create);
router.put('/:id', [authJwt(), ...taskValidate], TaskService._update);
router.delete('/:id', [authJwt()], TaskService._delete);

export default router;
