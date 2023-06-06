import { Router } from 'express'
import localsController from '../controllers/rating.controller.js';

const router = Router();

router.post('/', localsController.create);
router.get('/', localsController.findAll);
router.get('/:id', localsController.findById);
router.delete('/:id', localsController.deleteById);

export default  router;