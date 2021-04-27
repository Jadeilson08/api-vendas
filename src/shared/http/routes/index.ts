import { Router } from 'express';
import productRouter from '@modules/products/routes/Product.routes';

const routes = Router();

routes.get('', (req, res) => {
  return res.json({ message: 'Hello Dev!' });
});
routes.use('/products', productRouter);

export default routes;
