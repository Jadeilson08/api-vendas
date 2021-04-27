import ProductDTO from '@shared/dto/ProductDTO';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class UpdateProductService {
  public async execute(data: ProductDTO): Promise<Product> {
    const productRepository = await getCustomRepository(ProductRepository);

    const product = await productRepository.findOne(data.id);
    if (!product) throw new AppError('Product not found', 404);

    const productExists = await productRepository.findByName(data.name);
    if (productExists) throw new AppError('Product already exists', 409);

    product.name = data.name;
    product.price = data.price || 0;
    product.quantity = data.quantity || 0;

    await productRepository.save(product);

    return product;
  }
}

export default UpdateProductService;
