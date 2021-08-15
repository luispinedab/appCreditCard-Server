import { Router } from "express";
const router = Router();
import {deleteUser, getUsers,updateUser} from '../controllers/user.controller';
router.get('/users', getUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
export default router;