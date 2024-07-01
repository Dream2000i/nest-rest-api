import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true, minlength: 4 })
  title: string;

  @Prop({ required: true, min: 100 })
  price: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
