import { Router } from "express";
const router = Router();
import {deleteCreditCard,updateCreditCard,getCreditCard,createCreditCard,getCreditCards} from '../controllers/creditcard.controller';
router.get('/creditcards', getCreditCards);
router.get('/creditcards/:id', getCreditCard);
router.post('/creditcard', createCreditCard);
router.put('/creditcards/:id', updateCreditCard);
router.delete('/creditcards/:id', deleteCreditCard);
export default router;