import ProductDTO from '@shared/dto/ProductDTO';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductRepository';

class CreateProductService {
  public async execute(data: ProductDTO): Promise<Product> {
    const productRepository = await getCustomRepository(ProductRepository);
    const productExists = await productRepository.findByName(data.name);
    if (productExists)
      throw new AppError(`Products ${data.name} already exists`, 409);

    const product = productRepository.create({
      name: data.name,
      price: data.price,
      quantity: data.quantity,
    });
    await productRepository.save(product);
    return product;
  }
}

export default CreateProductService;
