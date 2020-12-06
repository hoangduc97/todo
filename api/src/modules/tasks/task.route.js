import express from 'express';
import TaskService from './task.service';

const router = express.Router();

router.get('/', TaskService._get);
router.post('/:id', TaskService._create);
router.put('/:id', TaskService._update);
router.delete('/:id', TaskService._delete);

export default router;
