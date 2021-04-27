import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class DeleteProductService {
  public async execute(id: string): Promise<void> {
    const productRepository = await getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(id);
    if (!product) throw new AppError('Product not found', 404);

    await productRepository.remove(product);
  }
}

export default DeleteProductService;
