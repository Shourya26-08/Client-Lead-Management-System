import {Router} from 'express';import {listLeads,stats,getLead,createLead,updateLead,deleteLead,addNote} from '../controllers/leadController.js';
import {auth} from '../middleware/auth.js';
const router=Router();router.use(auth);router.get('/stats',stats);router.get('/',listLeads);router.get('/:id',getLead);router.post('/',createLead);router.patch('/:id',updateLead);router.delete('/:id',deleteLead);router.post('/:id/notes',addNote);export default router;
