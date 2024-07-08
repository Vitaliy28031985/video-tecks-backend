import express from 'express';
import wrapper from '../../middlewares/wrapper.js';



const router = express.Router();

import auth from '../../middlewares/auth.js';

import add from '../../controllers/videos/add.js';
import getAll from '../../controllers/videos/get.js';
import update from '../../controllers/videos/update.js';
import remove from '../../controllers/videos/remove.js';

router.post('/', auth, wrapper(add));
router.get('/', auth, wrapper(getAll));
router.put('/:id', auth, wrapper(update));
router.delete('/:id', auth, wrapper(remove));


export default router;