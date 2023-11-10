import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import mongoose, { Types } from 'mongoose';

export type ChatDocument = HydratedDocument<Chats>;

@Schema({
  _id: true,
  versionKey: false,
})
export class Chats {
  id?: string;
  @Prop([{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' } }])
  members: { user: Types.ObjectId }[];

  @Prop([{ sender: { type: Types.ObjectId }, recipient: { type: Types.ObjectId }, body: { type: String } }])
  chat: { sender: Types.ObjectId; recipient: Types.ObjectId; body: string }[];
}

export const ChatSchema = SchemaFactory.createForClass(Chats);
