import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import * as mongoosePaginate from 'mongoose-paginate-v2';

export type ProductDocument = HydratedDocument<Products>;

@Schema({
  timestamps: true,
  _id: true,
})
export class Products {
  id?: string;
  @Prop({ required: true, trim: true })
  title: string;
  @Prop({ required: true, trim: true })
  description: string;
  @Prop({ required: true, trim: true })
  price: number;
  @Prop({ required: true, trim: true })
  code: string;
  @Prop({ required: true, trim: true })
  stock: number;
  @Prop({ required: true, trim: true })
  status: boolean;
  @Prop({ required: true, trim: true })
  category: string;
  @Prop({ required: false, trim: true })
  thumbnails: string;
}

export const ProductSchema = SchemaFactory.createForClass(Products).plugin(mongoosePaginate);
