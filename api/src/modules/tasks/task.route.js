import express from 'express';
import { authJwt } from '../../middlewares/auth.middleware';
import TaskService from './task.service';

const router = express.Router();

router.get('/:list_id', [authJwt()], TaskService._get);
router.post('/:list_id', [authJwt()], TaskService._create);
router.put('/:id', [authJwt()], TaskService._update);
router.delete('/:id', [authJwt()], TaskService._delete);

export default router;
