import express from 'express';
import register from '../../controllers/auth/register.js';
import login from '../../controllers/auth/login.js';
import logout from '../../controllers/auth/logout.js';

import auth from '../../middlewares/auth.js';
import wrapper from '../../middlewares/wrapper.js';

const router = express.Router();

router.post("/register", wrapper(register));
router.post("/login", wrapper(login));
router.post('/logout',  auth, wrapper(logout))

export default router;

