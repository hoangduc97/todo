import express from 'express';
import UserRoutes from '../modules/users/user.route';
import TaskRoutes from '../modules/tasks/task.route';

const router = express.Router();
router.use(process.env.USER_PATH, UserRoutes);
router.use(process.env.TASK_PATH, TaskRoutes);

export default router;
