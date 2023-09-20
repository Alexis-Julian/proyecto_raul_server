import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { Types } from 'mongoose';

enum Role {
  admin = 'admin',
  usuario = 'usuario',
  premium = 'premium',
}

@Schema({
  timestamps: true,
  _id: true,
})
export class User {
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
      idchat: { type: mongoose.Schema.Types.ObjectId, ref: 'chats' },
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    },
  ])
  chats: Types.ObjectId;

  @Prop([
    {
      friend: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    },
  ])
  friends: Types.ObjectId;

  @Prop([{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' } }])
  request: Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'carts' })
  cart: Types.ObjectId;
}

export const UserSchema = SchemaFactory.createForClass(User);
