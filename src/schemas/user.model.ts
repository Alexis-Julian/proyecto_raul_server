import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose, { Types } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

enum Role {
  admin = 'admin',
  usuario = 'usuario',
  premium = 'premium',
}

export type UserDocument = HydratedDocument<Users>;

@Schema({
  timestamps: true,
  _id: true,
})
export class Users {
  id?: string;

  @Prop({ required: true, trim: true })
  username: string;

  @Prop({ required: true, trim: true })
  password: string;

  @Prop({ required: true, unique: true, trim: true })
  email: string;

  @Prop({ required: true, enum: Role })
  role: string;

  @Prop({ trim: true })
  img: string;

  @Prop([
    {
      idchat: { type: mongoose.Schema.Types.ObjectId, ref: 'Chats' },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    },
  ])
  chats: { idchat: Types.ObjectId; user: Types.ObjectId }[];

  @Prop([
    {
      friend: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
    },
  ])
  friends: { friend: Types.ObjectId }[];

  @Prop([{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }, status: { type: Boolean, default: false } }])
  request: { user: Types.ObjectId; status: boolean }[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'carts' })
  cart: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(Users).plugin(mongoosePaginate);
