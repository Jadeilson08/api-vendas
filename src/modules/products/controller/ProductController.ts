import { Request, Response } from 'express';
import ProductDTO from '@shared/dto/ProductDTO';
import ListProductService from '../services/ListProductService';
import ShowProductService from '../services/ShowProductService';
import CreateProductService from '../services/CreateProductService';
import UpdateProductService from '../services/UpdateProductService';
import DeleteProductService from '../services/DeleteProductService';

export default class ProductController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listProduct = new ListProductService();
    return response.json(await listProduct.execute());
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const product = new ShowProductService();
    const { id } = request.params;
    if (!id) return response.json();
    return response.json(await product.execute(id));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const product = new ProductDTO();
    const { name, price, quantity } = request.body;
    product.name = name;
    product.price = Number(price);
    product.quantity = Number(quantity);
    const createProduct = new CreateProductService();
    return response.json(await createProduct.execute(product));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const product = new ProductDTO();
    const { id } = request.params;
    const { name, price, quantity } = request.body;
    product.id = id;
    product.name = name;
    product.price = Number(price);
    product.quantity = Number(quantity);
    const updateProduct = new UpdateProductService();
    return response.json(await updateProduct.execute(product));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const product = new DeleteProductService();
    return response.json(await product.execute(id));
  }
}
