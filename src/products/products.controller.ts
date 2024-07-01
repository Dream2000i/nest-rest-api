import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/product.schema";
import { ParamsProducts } from "./dto/params-product.dto";

@Controller("api/v1/products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(":id")
  async getOne(@Param() { id }: ParamsProducts): Promise<Product> {
    const result = await this.productsService.getById(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Delete(":id")
  async remove(@Param() { id }: ParamsProducts): Promise<Product> {
    const result = await this.productsService.remove(id);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }

  @Put(":id")
  async update(
    @Param() { id }: ParamsProducts,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const result = await this.productsService.update(id, updateProductDto);
    if (!result) {
      throw new NotFoundException();
    }
    return result;
  }
}
