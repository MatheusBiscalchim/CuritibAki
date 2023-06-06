import { Router } from 'express'
import localsController from '../controllers/locals.controller.js';

const router = Router();

router.post('/', localsController.create);
router.get('/', localsController.findAll);
router.get('/:id', localsController.findById);
router.patch('/:id', localsController.update);
router.delete('/:id', localsController.deleteById);

export default  router;