import { Router } from 'express';
import productController  from '../controllers/product.controller';

const router = Router();

router.get('/',productController.getAll);
router.get('/:id',productController.get);
router.post('/',productController.create);

export default router;