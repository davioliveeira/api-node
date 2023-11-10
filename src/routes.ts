import { Request, Response, Router } from 'express';

import logger from '@middlewares/logger';

const route = Router();

route.get('/hello', (_: Request, res: Response) => {
    logger.info(`Request recived`);
    res.json({ message: 'Hello, you enjoy in the world!' });
})

export default route; 
